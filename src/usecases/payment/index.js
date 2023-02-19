const mercadopago = require("mercadopago");
const config = require("../../lib/config");

mercadopago.configurations.setAccessToken(config.mercadopago.accessToken);

const newOrder = async (orderData) => {
  const order = new Order(orderData);
  const saveOrder = await order.save();
  return;
};
