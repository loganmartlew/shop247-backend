const { Router } = require('express');
const userIsValid = require('@util/validation/userIsValid');
const { getUserById } = require('@util/users/searchUsers');
const { addUser } = require('@util/users/addUser');
const { getProductsBySellerId } = require('@util/products/searchProducts');

const route = Router();

// Create a new user
route.post('/', async (req, res) => {
  const user = req.body.user;

  if (!userIsValid(user)) {
    return res.status(422).json({ message: `Invalid user provided` });
  }

  // Add user to database
  const newUser = await addUser(user);

  return res
    .status(201)
    .json({ message: `User added to database`, user: newUser });
});

// Get a single user
route.get('/:uid', async (req, res) => {
  const uid = req.params.uid;

  const user = await getUserById(uid);

  if (!user) {
    return res.status(404).json({ message: `User not found` });
  }

  return res.status(200).json({ user });
});

// Get products being sold by a user
route.get('/:uid/products', async (req, res) => {
  const uid = req.params.uid;

  const products = await getProductsBySellerId(uid);

  return res.status(200).json({ products });
});
