const { Router } = require('express');
const productsRoute = require('./products');

module.exports = () => {
  const app = Router();

  app.get('/', (req, res) => {
    res.send('Shop247 API');
  });

  app.get('/auth', (req, res) => {
    res.json(req.query);
  });

  app.use('/products', productsRoute);

  return app;
};