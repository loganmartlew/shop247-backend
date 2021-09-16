const { Router } = require('express');
const cors = require('./cors');
const auth = require('./auth');
const queryParams = require('./queryParams');

module.exports = () => {
  const app = Router();

  // Example middleware loading
  // app.use(isAuth())

  // app.use((req, res, next) => {
  //   console.log('middleware');
  //   next();
  // });

  app.use(cors);
  app.use(auth);
  app.use(queryParams);

  return app;
};
