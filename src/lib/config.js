require("dotenv").config();

const {
  APP_PORT,
  APP_DB_HOST,
  APP_DB_PASSWORD,
  APP_DB_USER,
  APP_SECRET,
  MERCADOPAGO_PUBLIC_KEY,
  MERCADOPAGO_ACCESS_TOKEN,
  MERCADOPAGO_URL,
  FRONTURL,
  AUTH_authRequired,
  AUTH_auth0Logout,
  AUTH_secret,
  AUTH_baseURL,
  AUTH_clientID,
  AUTH_issuerBaseURL,
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
    url: MERCADOPAGO_URL,
  },
  url: {
    front: FRONTURL,
  },
  auth: {
    authRequired: AUTH_authRequired,
    auth0Logout: AUTH_auth0Logout,
    secret: AUTH_secret,
    baseURL: AUTH_baseURL,
    clientID: AUTH_clientID,
    issuerBaseURL: AUTH_issuerBaseURL,
  },
};

module.exports = config;
