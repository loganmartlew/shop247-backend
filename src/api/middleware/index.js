const { Router } = require('express');

module.exports = () => {
  const app = Router();

  // Example middleware loading
  // app.use(isAuth())

  // app.use((req, res, next) => {
  //   console.log('middleware');
  //   next();
  // });

  return app;
};
