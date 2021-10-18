const { User } = require('@models/User');

const addUser = async user => {
  // Add user
  const newUser = await new User(user);

  user.avatar = 'https://shop247-backend.herokuapp.com/defaultprofile.webp';

  user.social = {
    facebook: '',
    instagram: '',
  };

  return newUser.save();
};

module.exports = { addUser };
