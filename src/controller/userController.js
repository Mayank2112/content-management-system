import { compareSync } from 'bcryptjs';
import tokenHelper from '../helper/tokenHelper';
import userService from '../services/userServices';

/**
 * Register user to the database
 * @param {Object} param User details
 * @returns User object
 */
const registerUser = async ({ name, email, password, role }) => {
  console.log('user', name, email, password, role);
  const userDetails = {
    name,
    email,
    password,
    role
  };

  try {
    const user = await userService.addUser(userDetails);
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
const loginUser = async ({ email, password }) => {
  const user = await userService.findUserWithEmail(email);
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
  registerUser,
  loginUser
};
