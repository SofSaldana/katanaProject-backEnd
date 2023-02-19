require("dotenv").config();

const {
  APP_PORT,
  APP_DB_HOST,
  APP_DB_PASSWORD,
  APP_DB_USER,
  APP_SECRET,
  MERCADOPAGO_PUBLIC_KEY,
  MERCADOPAGO_ACCESS_TOKEN,
} = process.env;

const config = {
  app: {
    port: APP_PORT || 8000,
    secret: APP_SECRET,
  },
  db: {
    user: APP_DB_USER,
    password: APP_DB_PASSWORD,
    host: APP_DB_HOST,
  },
  mercadopago: {
    publicKey: MERCADOPAGO_PUBLIC_KEY,
    accessToken: MERCADOPAGO_ACCESS_TOKEN,
  },
};

module.exports = config;
