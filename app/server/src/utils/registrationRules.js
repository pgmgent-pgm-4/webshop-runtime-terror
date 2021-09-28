import { body } from 'express-validator';

export const registrationRules = [
  body('username')
    .isLength({ min: 3 }).withMessage('Your username must consist of at least 3 characters'),
  body('email')
    .isEmail().withMessage('Your email is not valid'),
  body('password')
    .notEmpty().withMessage('password cannot be empty')
    .bail()
    .isLength({ min: 10 }).withMessage('Your password must consist of at least 10 characters'),
];