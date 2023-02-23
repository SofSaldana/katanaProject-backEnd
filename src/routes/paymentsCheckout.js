// const express = require("express");
// const mercadopago = require("mercadopago");
// const router = express.Router();
const config = require("../lib/config");
const axios = require("axios");
const mp = require("../usecases/payment/index.js");
console.log(mp);
const { Router } = require("express");
const router = Router();
const mercadopago = require("mercadopago");

// const preference = {
//   additional_info: {
//     items: [
//       {
//         id: "MLB2907679857",
//         title: "Point Mini",
//         description:
//           "Producto Point para cobros con tarjetas mediante bluetooth",
//         picture_url:
//           "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
//         category_id: "electronics",
//         quantity: 1,
//         unit_price: 58.8,
//       },
//     ],
//     payer: {
//       first_name: "Test",
//       last_name: "Test",
//       address: {},
//     },
//   },
//   description: "Payment for product",
//   installments: 1,
//   payer: {
//     entity_type: "individual",
//     type: "customer",
//   },
//   issuer_id: 521760312357677,
//   payment_method_id: "visa",
//   transaction_amount: 58.8,
// };

mercadopago.configure({
  access_token:
    "TEST-521760312357677-021422-7511c431996d3d08e2b8077886a3f851-243699844",
});

const preference = {
  items: [
    {
      title: "GATITO FELIZ",
      description: "Dummy description",
      picture_url: "http://www.myapp.com/myimage.jpg",
      category_id: "car_electronics",
      quantity: 1,
      currency_id: "MX",
      unit_price: 10,
    },
  ],
};

// const data = async () => await mp(items, 1, 1);
// console.log("PELAMEEEEEEEE" + data);

router.post("/", async (req, res) => {
  console.log("estufas se la come", preference);
  const data = await mercadopago.preferences.create(preference);
  console.log(data);
  //   const createPayment = await axios.post(
  //     `https://api.mercadopago.com/checkout/preferences`,
  //     data,
  //     { headers: { Authorization: `Bearer ${config.mercadopago.accessToken}` } }
  //   );
  //   if (!createPayment) throw new Error("PINTAME EL DEDO ..I..");
  res.status(200).json({ payload: data });
});

// module.exports = router;

const { process, feedback } = require("../middlewares/mercadopago");
router.post("/process", process);
router.get("/feedback", feedback);

module.exports = router;
