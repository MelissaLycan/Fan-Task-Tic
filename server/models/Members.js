const { Schema, model } = require("mongoose");

const memberSchema = new Schema({
  name: {
    type: String,
  },
  instrument: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Members = model("Member", memberSchema);

module.exports = Members;
