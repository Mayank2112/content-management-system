import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user';

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const { server } = require(`../../config/${env}`);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: server.jwtSecret
};

const jwtStrategy = new Strategy(opts, (jwtPayload, done) => {
  User.findOne({ id: jwtPayload.id, role: 'author' }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  });
});

export default jwtStrategy;
