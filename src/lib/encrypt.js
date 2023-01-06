const { hash, compare } = require("bcrypt");

const hashPassword = async (password) => {
  return await hash(password, 10);
};

const verifyPass = async (password, hash) => {
  return await compare(password, hash);
};

module.exports = {
  hashPassword,
  verifyPass,
};
