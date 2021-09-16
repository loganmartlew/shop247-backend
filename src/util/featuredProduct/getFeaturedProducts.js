const { FeaturedProduct } = require('@models/FeaturedProduct');
const { getProductById } = require('@util/products/searchProducts');

const getFeaturedProducts = async () => {
  const products = await FeaturedProduct.find();
  return products;
};

const getPopulatedFeaturedProducts = async () => {
  const featuredProducts = await getFeaturedProducts();
  const productIds = featuredProducts.map(product => product.productId);

  const products = await Promise.all(
    productIds.map(async id => await getProductById(id))
  );

  return products;
};

module.exports = getPopulatedFeaturedProducts;
