import morganMiddleware from './morgan.middleware';
import authMiddleware from './passport.middleware';
import swaggerSpec from './swagger.middleware';
import validateRegistration from './validateRegistration';

export { authMiddleware, morganMiddleware, swaggerSpec, validateRegistration };
