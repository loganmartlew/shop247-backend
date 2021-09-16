const { Order } = require('@models/Order');

const addOrder = async order => {
  // Add order
  const newOrder = await new Order(order).save();

  return newOrder;
};

module.exports = { addOrder };
