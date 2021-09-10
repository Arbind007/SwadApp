const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  order: { type: String, required: true },
});

module.exports = Order = mongoose.model("user", orderSchema);
