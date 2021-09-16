const cors = require('cors');

const whitelist = [
  'http://localhost:3000',
  'http://localhost:5000',
  'https://shop247-backend.herokuapp.com',
  'https://checkout.stripe.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = cors(corsOptions);
