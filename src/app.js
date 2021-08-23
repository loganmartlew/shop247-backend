const express = require('express');

const getApp = async () => {
  const app = express();

  await require('./loaders')(app);

  return app;
};

module.exports = getApp;
