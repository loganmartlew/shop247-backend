const Product = require('@models/Product');

const addProduct = async product => {
  // Add product
  const newProduct = await new Product(product).save();

  return newProduct;
};

module.exports = { addProduct };
