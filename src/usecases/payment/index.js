const mercadopago = require("mercadopago");
const config = require("../../lib/config");

const credential = config.accessToken;
const server = "http://localhost:8000";
const feedback = `http://localhost:8000/checkout/feedback`;
// console.log(credential);

const mp = async (items, cuotes, shipping) => {
  try {
    mercadopago.configure({
      access_token:
        "TEST-521760312357677-021422-7511c431996d3d08e2b8077886a3f851-243699844",
    });

    const config = {
      items,
      back_urls: {
        success: feedback,
        failure: feedback,
        pending: feedback,
      },
      payment_methods: {
        installments: cuotes,
      },
      auto_return: "approved",
      shipments: {
        cost: shipping,
        mode: "not_specified",
      },
    };

    const preference = await mercadopago.preferences.create(config);

    return mp;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mp;
