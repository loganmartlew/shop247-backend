const { Product } = require('@models/Product');

const getProductById = async productId => {
  try {
    const product = await Product.findById(productId);

    if (!product) throw new Error();

    return product._doc;
  } catch (err) {
    return null;
  }
};

const PAGE_LIMIT = 2;

const searchProducts = async (searchString, page = 1) => {
  page = Math.abs(page);

  const queryCount = await Product.countDocuments({
    $text: { $search: searchString },
  });

  const products = await Product.find(
    { $text: { $search: searchString } },
    {},
    { limit: PAGE_LIMIT, skip: (page - 1) * PAGE_LIMIT }
  );

  return {
    pages: { page, total: Math.ceil(queryCount / PAGE_LIMIT) },
    products,
  };
};

const searchProductsByCategories = async (searchString, categories) => {};

const getProductsBySellerId = async sellerId => {
  try {
    const products = await Product.find({ sellerId });

    if (!products) throw new Error();

    return products;
  } catch (err) {
    return null;
  }
};

module.exports = {
  getProductById,
  searchProducts,
  searchProductsByCategories,
  getProductsBySellerId,
};
