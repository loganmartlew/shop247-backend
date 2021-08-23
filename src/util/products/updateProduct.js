const Product = require('@models/Product');

const updateProduct = async (productId, updates) => {
  // Check if sellerId same as req auth id

  // Update product
  const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
    new: true,
  });
  return updatedProduct;
};

module.exports = { updateProduct };
