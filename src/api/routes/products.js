const { Router } = require('express');
const productIsValid = require('@util/validation/productIsValid');
const { searchProducts } = require('@util/searchProducts');

const route = Router();

/*
Search products
CRUD operations (auth)
*/

// Search products - requires search terms
// Filter by category
// Query params - search: string, categories: string`stringified array`
route.get('/', async (req, res) => {
  const query = req.query;

  if (query.categories?.length > 0) {
    // Search products with category filter
  }

  if (query.search?.length > 0) {
    // Search products by text alone
    const products = await searchProducts(query.search);

    return res.status(200).json({ products });
  }

  return res.status(422).json({ message: `Missing query param 'search'` });
});

// Create new product
// Authenticated
route.post('/', async (req, res) => {
  if (!req.isLoggedIn) {
    res
      .status(401)
      .json({ message: `Authentication is required for this action` });
  }

  const product = req.body.product;

  if (!productIsValid(product)) {
    res.status(422).json({ message: `Invalid product provided` });
  }

  // Add product to database (check authorization etc)
});

module.exports = route;
