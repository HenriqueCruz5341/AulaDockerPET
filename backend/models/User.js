const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
