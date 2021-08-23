const Product = require('@models/Product');

const addProduct = async product => {
  // Check if sellerId same as req auth id

  // Add product
  const newProduct = await new Product(product).save();

  return newProduct;
};

module.exports = { addProduct };
