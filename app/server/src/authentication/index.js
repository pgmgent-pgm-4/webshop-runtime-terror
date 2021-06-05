import Express from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import UserDb from './userDb.js';
import {registrationRules} from '../utils/registrationRules';
import {validateRegistration } from '../middleware/validateRegistration.js';
import * as  userController from '../api/controllers/user.controller';

// init router
const app = Express.Router();

// init user database 
const userData = new UserDb();

// configuration of passport.js with local strategy
const LocalStrategy = passportLocal.Strategy;
passport.use(
  new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' },

    async (username, password, done) => {
      try {
        // get user by username from database
        const user = await userData.getOne(username);

        // check if user exists
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }

        // check if password is correct

        if(!isValidPassword(user.password, password)) {
          return done(null, false, {message:"Incorrect password."});
        }

        // if (!(await isValidPassword(user, password))) {
        //   return done(null, false, { message: 'Incorrect password.' });
        // }

        return done(null, user);
      } catch (e) {
        return done(e);
      }
    },
  ),
);

app.post('/login', (req, res) => {


  // do authentication
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      res.status(401).json(info);
    } else if (!user) {
      res.status(401).json(info);
    } else {
      // jwt token
      const jwtObject = {
        id: user.id,
        username: user.username,
        email: user.email,
      };

      // create and sign a jwt
      const token = jwt.sign(jwtObject, process.env.jWT_UNIQUE_KEY, {
        expiresIn: parseInt(process.env.JWT_LIFETIME)
      });

      res.status(200).json({
        success: true,
        token: token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      });
    }
  })(req, res);
});


app.post('/register', registrationRules, validateRegistration, userController.addUser);

// app.get('/', (req, res) => {
//   res.status(200).json({
//     "message": 'Everyting is working fine'
//   });
// })

export default app;


const isValidPassword = async (userPassword, dbPassword) => {
  const match = await bcrypt.compare(userPassword, dbPassword);
  return match;
};
