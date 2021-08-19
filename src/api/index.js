const { Router } = require('express');
const loadMiddleware = require('./middleware');
const loadRoutes = require('./routes');

module.exports = () => {
  const app = Router();

  app.use(loadMiddleware());
  app.use(loadRoutes());

  return app;
};
