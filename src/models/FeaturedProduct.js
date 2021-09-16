const mongoose = require('mongoose');

const featuredProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
});

const FeaturedProduct = mongoose.model(
  'featuredProduct',
  featuredProductSchema
);

module.exports = { FeaturedProduct };
