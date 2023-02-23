// const express = require("express");
// const mercadopago = require("mercadopago");
// const router = express.Router();
// const config = require("../lib/config");
// const axios = require("axios");

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

// router.post("/", async (req, res) => {
//   const createPayment = await axios.post(
//     `${config.mercadopago.url}/v1/payments`,
//     preference,
//     { headers: { Authorization: `Bearer ${config.mercadopago.accessToken}` } }
//   );
//   if (!createPayment) throw new Error("PINTAME EL DEDO ..I..");
//   res.status(200).json({ payload: createPayment });
// });

// module.exports = router;

const { Router } = require("express");
const router = Router();
const { process, feedback } = require("../middlewares/mercadopago");
router.post("/process", process);
router.get("/feedback", feedback);

module.exports = router;
