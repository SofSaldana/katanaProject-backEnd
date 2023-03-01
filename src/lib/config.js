require("dotenv").config();

const {
  APP_PORT,
  APP_DB_HOST,
  APP_DB_PASSWORD,
  APP_DB_USER,
  APP_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
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
  google: {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  },
  auth0: {
    authRequired: false,
    auth0Logout: true,
    secret: "lwKBwCP_OSxSQMgcO6JqDi4i_VK3JWQ9WzPv5yniH5Pzughdoidu9J-5jS781gG1",
    baseURL: "https://blu-front-end.vercel.app",
    clientID: "TmRfjq0H0lCZYGFJAr0ceLhkQmAZAPeJ",
    issuerBaseURL: "https://dev-qato2bikn1cl4tjg.us.auth0.com",
  },
};

module.exports = config;
