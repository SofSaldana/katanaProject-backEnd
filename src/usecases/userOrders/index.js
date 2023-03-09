const UserOrder = require("../../models/userOrders");

const newOrder = async (orderData) => {
  const order = new UserOrder(orderData);
  const saveOrder = await order.save();
  return {
    id: saveOrder.id,
    user: saveOrder.userId,
  };
};

const getOrders = async () => {
  const allOrders = await UserOrder.find({});
  return allOrders;
};

module.exports = {
  newOrder,
  getOrders,
};
