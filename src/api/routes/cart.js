const { Router } = require('express');
const cartIsValid = require('@util/validation/cartIsValid');
const getCartPrice = require('@util/cart/getCartPrice');

const route = Router();

route.post('/checkprice', async (req, res) => {
  const cart = req.body.cart;

  if (!cartIsValid(cart)) {
    return res.status(422).json({ message: `Invalid cart provided` });
  }

  // Convert cart products to server products with mapDbProductsToCart

  const price = await getCartPrice(cart);

  if ((!price || price < 0) && price !== 0) {
    return res.status(422).json({ message: `Invalid cart price` });
  }

  return res.status(200).json({ price });
});

module.exports = route;
