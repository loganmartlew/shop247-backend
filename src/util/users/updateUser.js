const { User } = require('@models/User');

const updateUser = async (uid, name, facebook, instagram, location, avatar) => {
  try {
    const user = await User.findOne({ uid });

    if (!user) return null;

    if (name) {
      user.name = name;
    }

    if (facebook) {
      user.social.facebook = facebook;
    }

    if (instagram) {
      user.social.instagram = instagram;
    }

    if (location) {
      user.location = location;
    }

    if (avatar) {
      user.avatar = avatar;
    }

    const newUser = await user.save();

    return newUser;
  } catch (err) {
    return null;
  }
};

module.exports = { updateUser };
