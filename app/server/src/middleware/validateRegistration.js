import { validationResult } from 'express-validator';

export const validateRegistration = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  console.log('dfmfjs')
  next();
};