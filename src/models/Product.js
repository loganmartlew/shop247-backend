const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 50, // Prices stored as cents
  },
  images: [imageSchema],
  categories: [String],
  sellerId: {
    type: String,
    required: true,
  },
});

// Text search index
productSchema.index({ name: 'text', description: 'text' });

const Product = mongoose.model('product', productSchema);

module.exports = { Product, productSchema };
