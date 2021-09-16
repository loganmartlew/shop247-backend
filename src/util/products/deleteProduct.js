const { Product } = require('@models/Product');

const deleteProduct = async productId => {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  return deletedProduct;
};

module.exports = { deleteProduct };
