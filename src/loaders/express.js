const cors = require('cors');
const { json } = require('body-parser');
const api = require('@api');

module.exports = async app => {
  app.use(cors());
  app.options('*', cors());
  app.use(json());

  app.use(api());
};
