const { FeaturedProduct } = require('@models/FeaturedProduct');

const getFeaturedProducts = async () => {
  const products = await FeaturedProduct.find();
  return products;
};

module.exports = getFeaturedProducts;
