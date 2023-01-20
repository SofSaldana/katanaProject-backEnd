const User = require("../../models/users");
const encrypt = require("../../lib/encrypt");

const newUser = async (userData) => {
  userData.password = await encrypt.hashPassword(userData.password);
  const user = new User(userData);
  const saveUser = await user.save();
  return {
    id: saveUser.id,
    name: saveUser.name,
  };
};

module.exports = {
    newUser
};