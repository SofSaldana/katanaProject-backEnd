const mercadopago = require("mercadopago");
const configMp = require("././config");

mercadopago.configurations.setAccessToken(configMp.AT);

/* const paymentData = () => {
    transactionAmount: ,
    token: ,
    installments
} */ 
 