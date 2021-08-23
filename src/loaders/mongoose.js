const mongoose = require('mongoose');
const { getMongoUri } = require('@config');

module.exports = async () => {
  const connection = await mongoose.connect(getMongoUri(), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  return connection.connection.db;
};
