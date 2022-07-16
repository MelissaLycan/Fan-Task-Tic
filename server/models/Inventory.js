const { Schema, model } = require("mongoose");

const invSchema = new Schema({
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
  cost: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  sales_price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  order_link: {
    type: String,
    required: false,
  },
});

const Inventory = model("Inventory", invSchema);
module.exports = { Inventory, invSchema };
