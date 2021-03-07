import { hashSync } from 'bcryptjs';
import moment from 'moment';
import User from '../models/user';

/**
 * create new user in database
 * @param {Object} userDetails - containing all required fields
 * @param {String} userStatus - active/inactive user
 */
const add = async userDetails => {
  const userObject = {
    name: userDetails.name,
    email: userDetails.email,
    password: hashSync(userDetails.password, 10),
    role: userDetails.role,
    createdAt: moment().format(),
    updatedAt: moment().format()
  };

  try {
    const user = new User(userObject);
    await user.save();
    return user;
  } catch (err) {
    throw new Error(`Unable to register user due to ${err.message}`);
  }
};

/**
 * Fetch user with matching email and return user object
 * @param {String} email
 */
const findWithEmail = email => User.findOne({ email });

export default {
  add,
  findWithEmail
};
