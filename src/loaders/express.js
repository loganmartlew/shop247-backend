const { static } = require('express');
const path = require('path');
const cors = require('cors');
const { json } = require('body-parser');
const api = require('@api');

module.exports = async app => {
  app.use(cors());
  app.use(json());

  app.use(static(path.join(__dirname, '../', 'public')));

  app.use(api());
};
