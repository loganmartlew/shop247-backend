const { Router } = require('express');
const userIsValid = require('@util/validation/userIsValid');
const { getUserById } = require('@util/users/searchUsers');
const { addUser } = require('@util/users/addUser');
const { updateUser } = require('@util/users/updateUser');
const { getProductsBySellerId } = require('@util/products/searchProducts');
const { rateUser } = require('@util/users/rateUser');

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

// Rate a user
route.post('/:uid/rate', async (req, res) => {
  if (!req.isLoggedIn) {
    return res
      .status(401)
      .json({ message: `Authentication is required for this action` });
  }

  const uid = req.params.uid;
  const { reviewerUid, rating } = req.body;

  if (req.uid !== reviewerUid) {
    return res
      .status(422)
      .json({ message: `SellerId does not match request user uid` });
  }

  const user = await rateUser(uid, reviewerUid, rating);

  if (!user) {
    return res.status(500).json({ message: `Something went wrong` });
  }

  return res.status(201).json({ rating: user.rating.rating });
});

// Update a user's information
route.patch('/:uid', async (req, res) => {
  if (!req.isLoggedIn) {
    return res
      .status(401)
      .json({ message: `Authentication is required for this action` });
  }

  const uid = req.params.uid;

  if (req.uid !== uid) {
    return res
      .status(422)
      .json({ message: `SellerId does not match request user uid` });
  }

  const { name, facebook, instagram, location, avatar } = req.body;

  const newUser = await updateUser(
    uid,
    name,
    facebook,
    instagram,
    location,
    avatar
  );

  return res.status(200).json({ user: newUser });
});

module.exports = route;
