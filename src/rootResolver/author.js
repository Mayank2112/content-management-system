import controller from '../controller';

const author = {
  createPost: controller.post.create,
  update: controller.post.update
};

export default author;
