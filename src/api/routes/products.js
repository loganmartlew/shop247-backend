const { Router } = require('express');
const productIsValid = require('@util/validation/productIsValid');
const {
  getProductById,
  searchProducts,
} = require('@util/products/searchProducts');
const { addProduct } = require('@util/products/addProduct');
const { updateProduct } = require('@util/products/updateProduct');
const { deleteProduct } = require('@util/products/deleteProduct');

const route = Router();

// Search products - requires search terms
route.get('/', async (req, res) => {
  const query = req.query;

  if (query.categories?.length > 0) {
    // Search products with category filter
    const products = await searchProducts(query.search);

    return res.status(200).json({ products });
  }

  if (query.search?.length > 0) {
    // Search products by text alone
    const products = await searchProducts(query.search);

    return res.status(200).json({ products });
  }

  return res.status(422).json({ message: `Missing query param 'search'` });
});

// Get a single product
route.get('/:productId', async (req, res) => {
  const productId = req.params.productId;

  const product = await getProductById(productId);

  if (!product) {
    return res.status(404).json({ message: `Product not found` });
  }

  return res.status(200).json({ product });
});

// Create new product
// Authenticated
route.post('/', async (req, res) => {
  if (!req.isLoggedIn) {
    return res
      .status(401)
      .json({ message: `Authentication is required for this action` });
  }

  const product = req.body.product;

  if (!productIsValid(product)) {
    return res.status(422).json({ message: `Invalid product provided` });
  }

  // Add product to database (check authorization etc)
  const newProduct = await addProduct(product);

  return res
    .status(201)
    .json({ message: `Product added to database`, product: newProduct });
});

// Update an existing product
// Authenticated
route.patch('/:productId', async (req, res) => {
  if (!req.isLoggedIn) {
    return res
      .status(401)
      .json({ message: `Authentication is required for this action` });
  }

  const productId = req.params.productId;
  const updates = req.body.updates;

  if (!productId || typeof productId !== 'string') {
    return res.status(422).json({ message: `Product id must be provided` });
  }

  const oldProduct = await getProductById(productId);

  if (!oldProduct) {
    return res.status(404).json({ message: `Product not found` });
  }

  const newProduct = { ...oldProduct, ...updates };

  if (!productIsValid(newProduct)) {
    return res
      .status(422)
      .json({ message: `Provided updates to product are invalid` });
  }

  // Update product in database (check authorization etc)
  const updatedProduct = await updateProduct(productId, updates);

  return res
    .status(200)
    .json({ message: `Product updated`, product: updatedProduct });
});

// Delete a product
// Authenticated
route.delete('/:productId', async (req, res) => {
  if (!req.isLoggedIn) {
    return res
      .status(401)
      .json({ message: `Authentication is required for this action` });
  }

  const productId = req.params.productId;

  const deletedProduct = await deleteProduct(productId);

  if (!deletedProduct) {
    return res.status(200).json({ message: `Product does not exist` });
  }

  return res.status(200).json({ message: `Product deleted` });
});

module.exports = route;
