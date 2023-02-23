const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
  access_token: MERCADOPAGO_ACCESS_TOKEN,
});
