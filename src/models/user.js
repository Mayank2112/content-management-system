import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';

const UserSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    max: 50,
    validate: {
      validator: isEmail,
      message: '{VALUE} Entered Invalid Email'
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['author', 'editor', 'publisher'],
    required: true
  },
  createdAt: {
    type: Date,
    default: null
  },
  updatedAt: {
    type: Date,
    default: null
  }
});

const User = model('user', UserSchema);

export default User;
