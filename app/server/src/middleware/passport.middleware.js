import passport from 'passport';
import passportJWT from 'passport-jwt';

import { EnvironmentVariables } from '../config';

// Initialise passport
const JwtStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;

// Define jwtOptions
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: EnvironmentVariables.JWT_SECRET_KEY,
};


// configuration passport jwt
const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtData, done) => {
	try {
		return done(null, jwtData.username);
	} catch (error) {
		return done(null, error);
	}
});

// export { jwtStrategy };

export default (req, res, next) => {

  passport.authenticate('jwt', { session: false }, (error, user, info) => {
    if (error || !user) {
      Logger.error(info);
      res.status(401).json({
        error: 'The user has no permissions to login',
      });
    } else {
      next();
    }
  })(req, res, next);


  // is token valid 
  // const isUserAuthenticated = true;
  // (isUserAuthenticated) ? next() : res.status(401).json({
  //   error: "The user has no permissions to login"
  // });
}