const { getProductById } = require('@util/products/searchProducts');

const mapDbProductsToCart = async cart => {
  const newCart = await Promise.all(
    cart.map(async item => {
      const product = await getProductById(item.product._id);

      return {
        ...item,
        clientProduct: cart.product,
        product,
      };
    })
  );

  return newCart;
};

module.exports = mapDbProductsToCart;
