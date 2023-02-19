const express = require("express");
const mercadopago = require("mercadopago");
const router = express.Router();
const config = require("../lib/config");
const axios = require("axios");

// const header = {
//   headers: { Authorization: `Bearer ${config.mercadopago.accessToken}` },
// };

/* router.post("/payment_mercadopago", (req, res) => {
  mercadopago.configurations.setAccessToken(config.mercadopago.accessToken);
  const payment_data = {
    transaction_amount: req.body.transaction_amount,
    token: req.body.token, // SALE DE MERCADO PAGO
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuer,
    payer: {
      email: req.body.payer.email,
      identification: {
        type: req.body.payer.docType,
        number: req.body.payer.docNumber,
      },
    },
  };

  mercadopago.payment
    .save(payment_data)
    .then((response) => {
      return res.status(response.status).json({
        status: response.body.status,
        status_detail: response.body.status_detail,
        id: response.body.id,
      });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
}); */

const preference = {
  additional_info: {
    items: [
      {
        id: "MLB2907679857",
        title: "Point Mini",
        description:
          "Producto Point para cobros con tarjetas mediante bluetooth",
        picture_url:
          "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
        category_id: "electronics",
        quantity: 1,
        unit_price: 58.8,
      },
    ],
    payer: {
      first_name: "Test",
      last_name: "Test",
      address: {},
    },
  },
  description: "Payment for product",
  installments: 1,
  payer: {
    entity_type: "individual",
    type: "customer",
  },
  issuer_id: 521760312357677,
  payment_method_id: "visa",
  transaction_amount: 58.8,
};

router.post("/", async (req, res) => {
  const createPayment = await axios.post(
    `${config.mercadopago.url}/v1/payments`,
    preference,
    { headers: { Authorization: `Bearer ${config.mercadopago.accessToken}` } }
  );
  if (!createPayment) throw new Error("PINTAME EL DEDO ..I..");
  res.status(200).json({ payload: createPayment });
});

module.exports = router;
