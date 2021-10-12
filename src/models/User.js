const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  reviewers: {
    type: [String],
    default: [],
  },
});

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: ratingSchema,
    default: {
      rating: undefined,
      reviewers: [],
    },
  },
});

const User = mongoose.model('user', userSchema);

module.exports = { User };
