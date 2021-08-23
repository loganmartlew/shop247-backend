const queryParams = (req, res, next) => {
  const query = req.query;

  if (query.categories) {
    query.categories = JSON.parse(query.categories);
  }

  next();
};

module.exports = queryParams;
