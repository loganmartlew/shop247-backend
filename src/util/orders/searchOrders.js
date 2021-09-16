const { Order } = require('@models/Order');

const getOrderById = async orderId => {
  try {
    const order = await Order.findById(orderId);

    if (!order) throw new Error();

    return order._doc;
  } catch (err) {
    return null;
  }
};

const getOrdersByUserId = async uid => {
  try {
    const orders = await Order.find({ uid });

    if (!orders) throw new Error();

    return orders;
  } catch (err) {
    return null;
  }
};

module.exports = {
  getOrderById,
  getOrdersByUserId,
};
