import jwt from 'jsonwebtoken';
import { type Request, type Response } from 'express';
import { Types } from 'mongoose';
import handleAsync from 'express-async-handler';

import { appEnv } from 'config/app-env';
import type { AccessTokenClaims } from './AccessTokenClaims';
import logger from 'utils/logger';

import { IUser, UserModel } from 'db/models/user';

const applyAuthToken = async (
  req: Request,
  res: Response,
): Promise<IUser | null> => {
  const token = req.header('Authorization')?.split(' ')[1];

  logger.warn('middleware checking token...');

  if (!token) {
    res.status(401).json({ message: 'No token provided.' });
    logger.warn(
      `Unauthenticated access attempt: No token provided`,
    );
    return null;
  }

  let claims: AccessTokenClaims | null = null;

  try {
    claims = await new Promise<AccessTokenClaims>((resolve, reject) =>
      jwt.verify(token, appEnv.JWT_SIGNING_KEY ?? '', (err, decoded) => {
        if (err !== null) reject(err);
        else resolve(decoded as AccessTokenClaims);
      }),
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {}

  const user =
    claims && Types.ObjectId.isValid(claims.uid)
      ? await UserModel.findOne({ _id: claims.uid }).exec()
      : null;

  if (user === null) {
    logger.warn(
      `Unauthenticated access attempt: Invalid session token - ${token}`,
    );

    res.status(401).json({ message: 'Invalid session token.' });

    return null;
  }

  req.user = user;
  req.accessToken = token;

  return req.user ?? null;
};

export function requireAuthenticated(allowedRoles?: string[]) {
  return handleAsync(async (req, res, next) => {
    const loggedInUser = await applyAuthToken(req, res);

    if (!loggedInUser) {
      return;
    }

    if (allowedRoles && allowedRoles.length > 0) {
      const userRole = loggedInUser.role;

      if (!allowedRoles.includes(userRole)) {
        logger.warn(
          `Unauthorized access attempt: Invalid role - ${userRole} not allowed in [` +
            allowedRoles.join(', ') +
            ']',
        );

        res.status(403).json({ message: 'Not allowed' });
        return;
      }
    }

    next();
  });
}
