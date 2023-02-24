const mercadopago = require("mercadopago");
const config = require("../../lib/config");
const { getProductIdCart } = require("../products");

mercadopago.configure({
  access_token: config.mercadopago.accessToken,
});

const createPreference = async (productsIds) => {
  console.log("productis id: ", productsIds);
  const cartProducts = await getProductIdCart(productsIds);
  console.log("cart productis: ", cartProducts);
  const cartForPayment = { items: [] };

  const stagingCart = cartProducts.map((item) => ({
    id: item._id,
    title: item.name,
    description: item.description,
    picture_url: item.image,
    categroy_id: item.category,
    quantity: 1,
    currency_id: item.currency,
    unit_price: item.price,
  }));

  const data = await mercadopago.preferences.create({ items: stagingCart });
  return data;
};

module.exports = { createPreference };
