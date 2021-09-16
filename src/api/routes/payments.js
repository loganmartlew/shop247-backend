const { stripeSecretKey } = require('@config/');
const { Router } = require('express');
const stripe = require('stripe')(stripeSecretKey);
const mapDbProductsToCart = require('@util/cart/mapDbProductsToCart');
const getLineItemsFromCart = require('@util/cart/getLineItemsFromCart');
const cartIsValid = require('@util/validation/cartIsValid');

const route = Router();

route.post('/create-checkout-session', async (req, res) => {
  const cart = req.body.cart;

  if (!cartIsValid(cart)) {
    return res.status(422).json({ message: `Invalid cart provided` });
  }

  // Get server side products to replace client side data
  // const newCart = mapDbProductsToCart(cart);

  const lineItems = getLineItemsFromCart(cart);

  if (!lineItems) {
    return res.status(500).json({ message: `An unknown error occurred` });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',
  });

  if (!session) {
    return res.status(500).json({ message: `An unknown error occurred` });
  }

  res.redirect(303, session.url);
});
