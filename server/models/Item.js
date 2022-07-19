const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
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
    type: Number,
    required: true,
  },
  sales_price: {
    type: Number,
    required: true,
  },
  order_link: {
    type: String,
    required: false,
  },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // }
});

const Item = model("Item", itemSchema);
module.exports = Item;
