const { FeaturedProduct } = require('@models/FeaturedProduct');

const addFeaturedProduct = async productId => {
  const product = await new FeaturedProduct({ productId }).save();

  return product;
};

module.exports = addFeaturedProduct;
