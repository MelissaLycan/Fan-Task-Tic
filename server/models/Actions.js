const { Schema, model } = require("mongoose");

const actionSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  platform: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
  actionValue: {
    type: Number,
  },
  input: {
    type: String,
  },
});

const Actions = model("Actions", actionSchema);

module.exports = Actions;
