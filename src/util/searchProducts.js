const Product = require('@models/Product');

const searchProducts = async searchString => {
  const products = await Product.find({ $text: { $search: searchString } });
  return products;
};

const searchProductsByCategories = async (searchString, categories) => {};

module.exports = {
  searchProducts,
  searchProductsByCategories,
};
