const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true, trim: true },
  size: { type: String, required: true, trim: true },
  brand: { type: String, trim: true },
  reparationDetails: { type: String, trim: true },
  color: { type: String },
  category: { type: String },
  image: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  description: { type: String },
  shipmentCost: { type: Number },
});

module.exports = mongoose.model("Product", schema);
