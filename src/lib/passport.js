import passport from 'passport';
import jwtStrategy from '../strategies/jwtDefaultStrategy';

/**
 * Intialize passport and define strategies
 * @param {express} app express app
 */
const passportSetup = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(jwtStrategy);
};

export default {
  passportSetup,
  passport
};
