const { apiKey } = require('@config');

const auth = (req, res, next) => {
  // Validate request origin
  const reqApiKey = req.get('shop247-api-key');
  if (reqApiKey !== apiKey) {
    return res.status(401).json({ message: `Unauthorized request` });
  }

  // Check if user logged in
  if (req.get('shop247-user-uid') != null) {
    req.isLoggedIn = true;
    req.uid = req.get('shop247-user-uid');
  } else {
    req.isLoggedIn = false;
  }

  next();
};

module.exports = auth;
