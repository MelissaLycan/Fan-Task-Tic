const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
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
    inventory: [
      {
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
      },
    ],
    tasks: [
      {
        name: {
          type: String,
          trim: true,
        },
        platform: {
          type: String,
          required: true,
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
      },
    ],
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
      name: {
        type: String,
        trim: true,
      },
      platform: {
        type: String,
        required: true,
      },
      complete: {
        type: Boolean,
      },
      actionValue: {
        type: Number,
      },
      link: {
        type: String,
      },
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
module.exports = Users;
