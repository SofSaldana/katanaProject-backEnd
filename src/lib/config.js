require("dotenv").config();

const { APP_PORT, APP_DB_HOST, APP_DB_PASSWORD, APP_DB_USER, APP_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } =
  process.env;

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

  google: {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET
  }

};

module.exports = config;
