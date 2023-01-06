const { sign, verify } = require("jsonwebtoken");
const { app } = require("./config");

const createToken = (payload) => {
  return sign(payload, app.secret, { expiresIn: "1h" });
};

const verifyToken = (token) => verify(token, app.secret);

module.exports = { createToken, verifyToken };
