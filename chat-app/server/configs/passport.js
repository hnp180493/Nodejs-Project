const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const JWTExtract = require('passport-jwt').JWTExtract;
const UserModel = require('../models/userModel');
const helper = require('../helpers');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserModel.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Invalid username or password' });
      }

      const comparePassword = await helper.compareHash(password, user.password);
      if (!comparePassword) {
        return done('Invalid username or password');
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);
