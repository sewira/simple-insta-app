const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    session_id: {
      type: String,
    },
  }, 
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;