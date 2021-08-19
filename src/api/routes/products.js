const { Router } = require('express');
const Product = require('@models/Product');

const route = Router();

route.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

module.exports = route;
