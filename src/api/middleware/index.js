const { Router } = require('express');
const auth = require('./auth');
const queryParams = require('./queryParams');

module.exports = () => {
  const app = Router();

  app.use(auth);
  app.use(queryParams);

  return app;
};
