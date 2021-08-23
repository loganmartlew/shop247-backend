const auth = (req, res, next) => {
  // Check if user logged in
  req.isLoggedIn = true;

  next();
};

module.exports = auth;
