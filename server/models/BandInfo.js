const { Schema, model } = require("mongoose");

const bandSchema = new Schema({
  bandName: {
    type: String,
  },
  website: {
    type: String,
  },
  spotify: {
    type: String,
  },
  bandsintown: {
    type: String,
  },
  members: [
    {
      name: String,
      instrument: String,
      image: String,
    },
  ],
  socialLinks: {
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    tiktok: {
      type: String,
    },
    twitter: {
      type: String,
    },
    youtube: {
      type: String,
    },
  },
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const BandInfo = model("BandInfo", bandSchema);

module.exports = BandInfo;
