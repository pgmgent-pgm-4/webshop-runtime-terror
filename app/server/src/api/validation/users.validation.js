import { body, validationResult } from 'express-validation';

const validationUsers = (req, res, next) => {
  body('username')
    .notEmpty().withMessage('Username cannot be null')
  body('email')
    .isEmail().withMessage('Must be a valid e-mail address')
}


