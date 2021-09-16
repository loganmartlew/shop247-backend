const { Router } = require('express');
const {
  getOrdersByUserId,
  getOrderById,
} = require('@util/orders/searchOrders');

const route = Router();

// Get orders for a user by user id
route.get('/user/:uid', async (req, res) => {
  const uid = req.params.uid;

  const orders = await getOrdersByUserId(uid);

  return res.status(200).json({ orders });
});

// Get a specific order by order id
route.get('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;

  const order = await getOrderById(orderId);

  if (!order) {
    return res.status(404).json({ message: `Order not found` });
  }

  return res.status(200).json({ order });
});

module.exports = route;
