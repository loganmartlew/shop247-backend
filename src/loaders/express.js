const cors = require('cors');
const { json } = require('body-parser');
const routes = require('@api');

module.exports = async app => {
  app.use(cors());
  app.use(json());

  app.use(routes());
};
