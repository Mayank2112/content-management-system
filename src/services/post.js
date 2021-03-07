import moment from 'moment';
import Post from '../models/post';

/**
 * create new post in database
 * @param {Object} postDetails - containing all required fields
 */
const add = async postDetails => {
  const postObject = {
    title: postDetails.title,
    bannerImage: postDetails.bannerImage,
    content: postDetails.content,
    publish: 'pending',
    author: postDetails.user,
    createdAt: moment().format(),
    updatedAt: moment().format()
  };

  try {
    const post = new Post(postObject);
    await post.save();
    return post;
  } catch (err) {
    throw new Error(`Unable to register post due to ${err.message}`);
  }
};

/**
 * Fetch post by author
 * @param {User} author
 */
const findByAuthor = author => Post.findOne({ author });

const update = async (id, updateDetails) => {
  await Post.updateOne(
    { _id: id },
    {
      $set: {
        updateDetails
      }
    }
  );
};

export default {
  add,
  findByAuthor,
  update
};
