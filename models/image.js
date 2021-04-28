/* eslint-disable camelcase */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  image: {
    type: String,
  },

  date: {
    type: Date,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Daily = mongoose.model("Image", imageSchema);

module.exports = Daily;
