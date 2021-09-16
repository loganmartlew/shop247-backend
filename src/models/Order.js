const mongoose = require('mongoose');
const { productSchema } = require('./Product');

const itemSchema = new mongoose.Schema({
  product: {
    type: productSchema,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  items: {
    type: [itemSchema],
    required: true,
  },
});

const Order = mongoose.model('order', orderSchema);

module.exports = {
  Order,
};
