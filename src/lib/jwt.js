const jwt = require("jsonwebtoken");
const { app } = require("./config");

const createToken = (email, isAdmin, userId) => {
  const payload = { email, isAdmin, userId };
  return jwt.sign(payload, app.secret, { expiresIn: "1h" });
};

const verifyToken = (token) => jwt.verify(token, app.secret);

module.exports = { createToken, verifyToken };
