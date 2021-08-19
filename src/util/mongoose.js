const mongoose = require('mongoose');
const { getMongoUri } = require('../config');

const getDb = dbName => {
  const mongoUri = getMongoUri(dbName);

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  const promise = new Promise((resolve, reject) => {
    db.once('open', () => {
      resolve(db);
    });
  });

  return promise;
};

const transaction = async (dbName, cb) => {
  const db = await getDb(dbName);

  if (typeof cb !== 'function') {
    throw new Error('Provided callback is not a function');
  }

  const data = await cb();

  db.close();

  if (data == null) {
    throw new Error('No data was returned from the database');
  }

  return data;
};

module.exports = {
  transaction,
};
