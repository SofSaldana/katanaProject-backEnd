const { Router } = require("express");
const router = Router();
const payments = require("../usecases/payment/");

router.post("/", async (req, res) => {
  const preferenceBody = req.body;
  const preference = await payments.createPreference(preferenceBody);
  res.status(200).json({ payload: preference });
});

module.exports = router;
