const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  images: {
    type: String
  }
});

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;