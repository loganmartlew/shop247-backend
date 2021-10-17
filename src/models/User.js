const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
  facebook: String,
  instagram: String,
});

const reviewSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  reviews: [reviewSchema],
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
  social: socialSchema,
  location: String,
  avatar: {
    type: String,
    default: 'https://shop247-backend.herokuapp.com/defaultprofile.webp',
  },
  rating: ratingSchema,
});

const User = mongoose.model('user', userSchema);

module.exports = { User };
