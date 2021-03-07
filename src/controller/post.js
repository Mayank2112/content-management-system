import services from '../services';

/**
 * Create new post
 * @param {Object} param Post details
 * @returns User object
 */
const create = async postDetails => {
  try {
    const post = await services.post.add(postDetails);
    return post;
  } catch (err) {
    return { err: err.message };
  }
};

/**
 * Update post
 * @param {Object} param Post details
 * @returns User object
 */
const update = async postDetails => {
  try {
    const post = await services.post.update(postDetails);
    return post;
  } catch (err) {
    return { err: err.message };
  }
};

/**
 * Update publish action
 * @param {Object} param Post details
 * @returns User object
 */
const updatePublish = async action => {
  try {
    const post = await services.post.update({ publish: action.publishAction });
    return post;
  } catch (err) {
    return { err: err.message };
  }
};

export default {
  create,
  update,
  updatePublish
};
