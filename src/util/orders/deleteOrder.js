const { Order } = require('@models/Order');

const deleteOrder = async orderId => {
  const deletedOrder = await Order.findByIdAndDelete(orderId);
  return deletedOrder;
};

module.exports = { deleteOrder };
