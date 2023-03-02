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

const findByEmail = async (email) => await User.find({ email }).exec();

const authenticate = async (email, password) => {
  const userFind = await findByEmail(email);
  const userPassword = userFind[0].password;
  const userAdmin = userFind[0].isAdmin;
  const authPassed = await encrypt.verifyPass(password, userPassword);
  return { authPassed, userAdmin };
};

const getUser = async (id) => await User.findById(id).exec();

const deleteUser = async (id) => await User.findByIdAndDelete(id).exec();

module.exports = {
  newUser,
  updateUser,
  deleteUser,
  getAllUsers,
  findByEmail,
  authenticate,
  getUser,
};
