const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  id: { type: String, required: true, trim: true },
  size: { type: String, required: true, trim: true },
  brand: { type: [String] },
  reparationDetails: { type: [String] },
  color: { type: [String] },
  categorie: { type: [String] },
  image: { type: String },
  quantity: {},
});

const model = mongoose.model("Product", schema);

module.exports = {
  schema,
  model,
};
