const { User } = require('@models/User');

const getUserById = async uid => {
  try {
    const user = await User.findOne({ uid });

    if (!user) throw new Error();

    return user._doc;
  } catch (err) {
    return null;
  }
};

module.exports = {
  getUserById,
};
