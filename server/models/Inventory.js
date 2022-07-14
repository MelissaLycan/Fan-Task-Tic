const { Schema, model } = require("mongoose");

const invSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
  },
  image_file: {
    type: String,
    required: true,
  },
  current_stock: {
    type: Number,
    required: false,
    defaultValue: 0,
  },
});

const Inventory = model("Inventory", invSchema);
module.exports = Inventory;
