const { Schema, model, Model } = require("mongoose");

const userSchema = new Model({
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
        name: {
          type: String,
        },
        instrument: {
          type: String,
        },
        image: {
          type: String,
        },
      },
    ],
    socialLinks: [
      {
        facebook: {
          type: String,
          required: true,
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
    ],
    inventory: [
      {
        inventory_id: {
          type: Schema.Types.ObjectId,
          required: true,
          unique: true,
          autoIncrement: true,
        },
        name: {
          type: String,
          required: true,
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

const Users = model("User", userSchema);
module.exports = Users;
