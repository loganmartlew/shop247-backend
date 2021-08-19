const mongoose = require('mongoose');
const { getMongoUri } = require('../config');

module.exports = async () => {
  const connection = await mongoose.connect(getMongoUri(), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  return connection.connection.db;
};
