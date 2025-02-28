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
import {
  getPasswordResetTemplate,
  sendEmail,
  validateAge,
} from 'utils/helpers';

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
  const passwordSchema = joi.string().min(8).max(30).required().messages({
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

router.post(
  '/api/auth/register',
  validateJoi(
    joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
      role: joi.string().valid('employer', 'employee').required(),

      fullName: joi.string().required(),
      dateOfBirth: joi.date(),

      companyPhone: customJoi.optionalString(),
      companyPersonName: customJoi.optionalString(),
      companyIndustry: customJoi.optionalString(),
      companyArea: customJoi.optionalString(),
    }),
  ),
  ah(async (req, res) => {
    const { email, password, role, ...restData } = req.body;

    const checkAge = validateAge(restData.dateOfBirth);
    if (checkAge < 18)
      throw new ApplicationError('You must be at least 18 years old');

    const strengthError = validatePasswordStrength(password);
    if (strengthError) throw new ApplicationError(strengthError);

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) throw new ApplicationError('Email already registered');

    const passwordHash = await hashPassword(password);

    let user = new UserModel({
      ...restData,
      email,
      passwordHash,
      role,
    });

    user = await user.save();
    const token = await createToken(user);

    return reply(res, { token, user });
  }),
);

router.post(
  '/api/auth/forgot-password',
  validateJoi(
    joi.object({
      email: joi.string().email().required(),
    }),
  ),
  ah(async (req, res) => {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new ApplicationError('No account found with this email', 404);
    }

    const resetToken = jwt.sign(
      { uid: user._id.toString(), purpose: 'reset-password' },
      appEnv.JWT_SIGNING_KEY || '',
      { expiresIn: '1h' },
    );

    const resetLink = `https://seasonistas.com/reset-password?token=${resetToken}`;
    const emailHtml = getPasswordResetTemplate(resetLink);

    sendEmail(email, 'Forgot Password Request', emailHtml);

    return reply(res, {
      message: 'Password reset instructions sent to your email',
    });
  }),
);

router.post(
  '/api/auth/reset-password',
  validateJoi(
    joi.object({
      token: joi.string().required(),
      newPassword: joi.string().required(),
    }),
  ),
  ah(async (req, res) => {
    const { token, newPassword } = req.body;

    let decoded;
    try {
      decoded = jwt.verify(
        token,
        appEnv.JWT_SIGNING_KEY || '',
      ) as AccessTokenClaims & { purpose: string };
    } catch (err) {
      throw new ApplicationError('Invalid or expired reset token', 401);
    }

    if (decoded.purpose !== 'reset-password') {
      throw new ApplicationError('Invalid reset token', 401);
    }

    const strengthError = validatePasswordStrength(newPassword);
    if (strengthError) {
      throw new ApplicationError(strengthError);
    }

    const user = await UserModel.findById(decoded.uid);
    if (!user) {
      throw new ApplicationError('User not found', 404);
    }

    user.passwordHash = await hashPassword(newPassword);
    await user.save();

    return reply(res, { message: 'Password has been reset successfully' });
  }),
);
