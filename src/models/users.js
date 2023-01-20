const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  userName: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  id: {},
  adress: {},
  sells: {},
  shipments: {},
  clients: {},
  products: {},
  dashboard: {},
});

const model = mongoose.model("userAdministrator", schema);

module.exports = {
  schema,
  model,
};
