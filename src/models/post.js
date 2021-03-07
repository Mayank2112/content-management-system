import { Schema, model } from 'mongoose';

const PostSchema = Schema({
  title: {
    type: String,
    required: true
  },
  bannerImage: {
    type: Buffer,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  publish: {
    type: String,
    enum: ['pending', 'published', 'rejected'],
    required: true,
    default: 'pending'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    default: null
  },
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    default: null
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date,
    default: null
  }
});

const Post = model('Post', PostSchema);

export default Post;
