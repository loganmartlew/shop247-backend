const { Router } = require('express');
const productsRoute = require('./products');
const cartRoute = require('./cart');
const usersRoute = require('./users');

module.exports = () => {
  const app = Router();

  app.get('/', (req, res) => {
    res.send('Shop247 API');
  });

  app.get('/auth', (req, res) => {
    res.json(req.query);
  });

  app.use('/products', productsRoute);

  app.use('/cart', cartRoute);

  app.use('/users', usersRoute);

  return app;
};
