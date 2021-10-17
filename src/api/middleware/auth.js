const { apiKey } = require('@config');
const { getUserById } = require('@util/users/searchUsers');

const auth = async (req, res, next) => {
  // Allow all requests for defaultprofile.webp
  if (req.path === '/defaultprofile.webp') {
    next();
    return;
  }

  // Validate request origin
  const reqApiKey = req.get('shop247-api-key');
  if (reqApiKey !== apiKey) {
    return res.status(401).json({ message: `Unauthorized request` });
  }

  // Check if user logged in
  const reqUid = req.get('shop247-user-uid');

  if (reqUid != null) {
    const user = await getUserById(reqUid);

    if (!user) {
      return res.status(404).json({ message: `User not found` });
    }

    req.isLoggedIn = true;
    req.uid = req.get('shop247-user-uid');
  } else {
    req.isLoggedIn = false;
  }

  next();
};

module.exports = auth;
