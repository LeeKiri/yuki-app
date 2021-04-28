/* eslint-disable camelcase */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },

  comments: {
    type: String,
    trim: true,
  },

  image: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Daily = mongoose.model("Image", imageSchema);

module.exports = Daily;
