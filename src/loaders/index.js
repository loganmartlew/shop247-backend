const mongooseLoader = require('./mongoose');
const expressLoader = require('./express');

module.exports = async app => {
  await mongooseLoader();
  console.info('Mongoose loaded and DB connected');

  await expressLoader(app);
  console.info('Express app loaded and configured');

  console.log();
};
