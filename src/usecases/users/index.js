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

const updateUser = async (id, update) => {
  const patchUser = await User.findByIdAndUpdate(id, update, {
    new: true,
  }).exec();
  return patchUser;
};

const getAllUsers = async () => {
  const findAllUsers = await User.find({}).exec();
  return findAllUsers;
};

const getUser = async (id) => {
  const findUser = await User.findById({ id }).exec();
  return findUser;
};

const deleteUser = async (id) => await User.findByIdAndDelete(id).exec();

module.exports = {
  newUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
};
