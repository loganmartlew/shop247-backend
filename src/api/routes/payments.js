const { stripeSecretKey } = require('@config/');
const { Router } = require('express');
const stripe = require('stripe')(stripeSecretKey);
const mapDbProductsToCart = require('@util/cart/mapDbProductsToCart');
const getLineItemsFromCart = require('@util/cart/getLineItemsFromCart');
const cartIsValid = require('@util/validation/cartIsValid');
const getCartPrice = require('@util/cart/getCartPrice');
const { addOrder } = require('@util/orders/addOrder');
const { deleteOrder } = require('@util/orders/deleteOrder');

const route = Router();

route.get('/paymentcancel/:orderId', async (req, res) => {
  const orderId = req.params.orderId;

  const deletedOrder = await deleteOrder(orderId);

  return res
    .status(200)
    .json({ message: `Order deleted`, order: deletedOrder });
});

route.post('/create-checkout-session', async (req, res) => {
  if (!req.isLoggedIn) {
    return res
      .status(401)
      .json({ message: `Authentication is required for this action` });
  }

  const cart = req.body.cart;

  if (!cartIsValid(cart)) {
    return res.status(422).json({ message: `Invalid cart provided` });
  }

  // Get server side products to replace client side data
  const newCart = await mapDbProductsToCart(cart);

  const order = {
    totalPrice: await getCartPrice(newCart),
    items: newCart,
    date: new Date(),
    uid: req.uid,
  };

  const newOrder = await addOrder(order);

  if (!newOrder) {
    return res.status(500).json({ message: `An unknown error occurred` });
  }

  const lineItems = getLineItemsFromCart(cart);

  if (!lineItems) {
    return res.status(500).json({ message: `An unknown error occurred` });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'https://shop247-aut.netlify.app/paymentsuccess',
    cancel_url: `https://shop247-aut.netlify.app/paymentcancel?orderid=${newOrder._id}`,
  });

  if (!session) {
    return res.status(500).json({ message: `An unknown error occurred` });
  }

  res.status(200).json({ url: session.url });
});

module.exports = route;
