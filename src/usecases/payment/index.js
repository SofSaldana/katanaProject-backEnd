const mercadopago = require("mercadopago");
const config = require("../../lib/config");
const { getProductIdCart } = require("../products");

mercadopago.configure({
  access_token: config.mercadopago.accessToken,
});

const createPreference = async (productsIds) => {
  const cartProducts = await getProductIdCart(productsIds);

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

  const stagingUser = {
    first_name: "TEST_USER_1310746633",
    last_name: "Test",
    address: {},
  };

  const backurls = {
    success: `${config.url.front}/success`,
    failure: `${config.url.front}/failure`,
    pending: `${config.url.front}/pending`,
  };

  const data = await mercadopago.preferences.create({
    items: stagingCart,
    payer: stagingUser,
    back_urls: backurls,
    auto_return: "approved",
    payment_methods: {
      installments: 1,
    },
  });

  return data;
};

module.exports = { createPreference };
