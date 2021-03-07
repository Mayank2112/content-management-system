import { sign, verify } from 'jsonwebtoken';

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const { server } = require(`../../config/${env}`);

/**
 * Sign jwt token with user credentials
 * @param {User} user UserSchema object
 */
const createToken = user => sign({ id: user.id, email: user.email },
  server.jwtSecret,
  { expiresIn: server.jwtTime });

const verifyJWTToken = token => verify(token, server.jwtSecret);

export default {
  createToken,
  verifyJWTToken
};
