import userController from '../controller/userController';

const userRoots = {
  registration: userController.registerUser,
  login: userController.loginUser
};

export default userRoots;
