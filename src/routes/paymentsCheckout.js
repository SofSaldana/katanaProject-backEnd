const express = require("express");
const mercadopago = require("mercadopago");
const router = express.Router();
require("dotenv").config();


router.post("/payment_mercadopago", (req, res) => {
    mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);
    const payment_data = {
      transaction_amount: req.body.transaction_amount,
        token: req.body.token,
        description: req.body.description,  
        installments: Number(req.body.installments),
        payment_method_id: req.body.paymentMethodId,
        issuer_id: req.body.issuer,
        // notification_url: "test"
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
});

module.exports = router;
