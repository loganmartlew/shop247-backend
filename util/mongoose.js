const mongoose = require('mongoose');

const getDb = dbName => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const connectionString = `mongodb+srv://${username}:${password}@cluster0.ghvcd.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose.connect(connectionString, {
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
