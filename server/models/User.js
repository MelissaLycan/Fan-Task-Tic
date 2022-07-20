const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validateEmail, "Please use a valid email address."],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  bandMember: [
    {
      type: Schema.Types.ObjectId,
      ref: "BandInfo",
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  actions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actions",
    },
  ],
  points: [
    {
      Band: {
        type: Schema.Types.ObjectId,
        ref: "BandInfo",
      },
      pointValue: {
        type: Number,
      },
    },
  ],
});

userSchema.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});
//All changes of password must use db.changeUserPassword() method, otherwise updated password will not be encrypted.
userSchema.pre("changeUserPassword", function (next) {
  const password = this.getUpdate().$set.password;
  if (!password) {
    return next();
  }
  try {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    this.getUpdate().$set.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = model("User", userSchema);
module.exports = User;
