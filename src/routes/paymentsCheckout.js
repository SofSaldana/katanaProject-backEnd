const config = require("../lib/config");
const mercadopago = require("mercadopago");
const { Router } = require("express");
const router = Router();
const payments = require("../usecases/payment/");

router.post("/", async (req, res) => {
  const estufas = req.body;
  const preference = await payments.createPreference(estufas);
  res.status(200).json({ payload: preference });
});

// const { process, feedback } = require("../middlewares/mercadopago");
// const products = require("../models/products");
// router.post("/process", process);
// router.get("/feedback", feedback);

module.exports = router;
