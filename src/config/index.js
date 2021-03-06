const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  console.log("Couldn't find .env file");
}

const apiKey = process.env.API_KEY;

const mongoUsername = process.env.DB_USERNAME;
const mongoPassword = process.env.DB_PASSWORD;

const getMongoUri = () => {
  return `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.ghvcd.mongodb.net/shop247?retryWrites=true&w=majority`;
};

const stripeSecretKey = process.env.STRIPE_SK;

module.exports = {
  port: process.env.PORT || 5000,
  apiKey,
  getMongoUri,
  stripeSecretKey,
};
