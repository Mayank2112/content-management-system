import { compareSync } from 'bcryptjs';
import tokenHelper from '../helper/tokenHelper';
import services from '../services';

/**
 * Register user to the database
 * @param {Object} param User details
 * @returns User object
 */
const register = async userDetails => {
  try {
    const user = await services.user.add(userDetails);
    return user;
  } catch (err) {
    return { err: err.message };
  }
};

/**
 * Create token add it into session and return it
 * @param {Object} param User credentials email and password
 * @returns JWT token
 */
const login = async ({ email, password }) => {
  const user = await services.user.findWithEmail(email);
  if (user) {
    const isVerified = compareSync(password, user.password);
    if (isVerified) {
      const token = tokenHelper.createToken(user);
      return { token };
    }
    return { err: 'Email and password doesn\'t match' };
  }
  return { err: 'The user does not exist' };
};

export default {
  register,
  login
};
