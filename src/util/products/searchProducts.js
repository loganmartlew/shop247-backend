const Product = require('@models/Product');

const getProductById = async productId => {
  try {
    const product = await Product.findById(productId);

    if (!product) throw new Error();

    return product._doc;
  } catch (err) {
    return null;
  }
};

const searchProducts = async searchString => {
  const products = await Product.find({ $text: { $search: searchString } });
  return products;
};

const searchProductsByCategories = async (searchString, categories) => {};

module.exports = {
  getProductById,
  searchProducts,
  searchProductsByCategories,
};
