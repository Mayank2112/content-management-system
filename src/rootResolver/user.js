import controller from '../controller';

const userRoots = {
  registration: controller.user.register,
  login: controller.user.login
};

export default userRoots;
