const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    autoIncrement: true,
    trim: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
    defaultValue: false,
  },
  isBand: {
    type: Boolean,
    required: true,
    defaultValue: false,
  },
  bandDetails: {
    bandName: String,
    website: String,
    spotify: String,
    bandsintown: String,
    members: [
      {
        name: String,
        instrument: String,
        image: String,
      },
    ],
    social: [
      { facebook: String },
      { instagram: String },
      { tiktok: String },
      { twitter: String },
      { youtube: String },
    ],
    inventory: [],
    tasks: [],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      len: [8],
    },
  },
  actions: [
    {
      type: String,
      trim: true,
      platform: String,
      complete: Boolean,
      actionValue: Number,
      link: String,
    },
  ],
  points: [
    {
      bandName: String,
      pointValue: Number,
    },
  ],
});

const User = model("User", userSchema);
module.exports = User;
