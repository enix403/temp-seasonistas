import express from 'express';
import ah from 'express-async-handler';
import { ApplicationError } from 'controllers/core/errors';

import { UserModel } from 'db/models/user';
import { AccessTokenClaims } from 'middleware/AccessTokenClaims';
import jwt from 'jsonwebtoken';
import { appEnv } from 'config/app-env';

import { comparePassword, hashPassword } from './hashing';
import { reply } from 'controllers/core/app-reply';
import joi from 'joi';
import { customJoi, validateJoi } from 'middleware/validateJoi';
import { validateAge } from 'utils/helpers';
import { requireAuthenticated } from 'middleware/authMiddleware';
import { log } from 'winston';

export const router = express.Router();

function createToken(user: any) {
  return new Promise<string>((resolve, reject) =>
    jwt.sign(
      { uid: user._id.toString() } satisfies AccessTokenClaims,
      appEnv.JWT_SIGNING_KEY || '',
      (err: any, token: string) => {
        if (err) reject(err);
        else resolve(token);
      },
    ),
  );
}

router.post(
  '/api/auth/login',
  validateJoi(
    joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
    }),
  ),
  ah(async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (
      user == null ||
      !(await comparePassword(password, user.passwordHash || ''))
    ) {
      throw new ApplicationError('Invalid email or password', 401);
    }

    let token = await createToken(user);

    return reply(res, { token, user });
  }),
);

function validatePasswordStrength(password: any) {
  const passwordSchema = joi.string()
    .min(8)
    .max(30)
    .required()
    .messages({
      'string.base': 'Password should be a string.',
      'string.empty': 'Password cannot be empty.',
      'string.min': 'Password should be at least 8 characters long.',
      'string.max': 'Password should not exceed 30 characters.',
      'any.required': 'Password is required.',
    });

  // Validate the password
  const { error } = passwordSchema.validate(password);

  // If validation fails, return the first error messages
  if (error) {
    return error.details[0].message;
  }

  return null;
}

router.patch(
  '/api/auth/update-password',
  requireAuthenticated(),
  validateJoi(
    joi.object({
      newPassword: joi.string().required(),
      oldPassword: joi.string().required(),
    }),
  ),
  ah(async (req, res) => {
    const { oldPassword, newPassword } = req.body;





    let user = await UserModel.findById(req.user!._id)
    if (
      user == null ||
      !(await comparePassword(oldPassword, user.passwordHash || ''))
    ) {
      throw new ApplicationError("Please provide correct old password", 401);
    }
    const strengthError = validatePasswordStrength(newPassword);
    if (strengthError) throw new ApplicationError(strengthError);
    const newHashedPassword = await hashPassword(newPassword)
    user.passwordHash = newHashedPassword
    await user.save()
    const token = await createToken(user);
    return reply(res, { token, user });

  }),
);
