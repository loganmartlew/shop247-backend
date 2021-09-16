const { User } = require('@models/User');

const addUser = async user => {
  // Add user
  const newUser = await new User(user).save();

  return newUser;
};

module.exports = { addUser };
