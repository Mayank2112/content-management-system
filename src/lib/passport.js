import passport from 'passport';
import jwtStrategy from '../strategies';

/**
 * Intialize passport and define strategies
 * @param {express} app express app
 */
const passportSetup = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.use('jwt-author', jwtStrategy.author);
  passport.use('jwt-editor', jwtStrategy.editor);
  passport.use('jwt-publisher', jwtStrategy.publisher);
};

export default {
  passportSetup,
  passport
};
