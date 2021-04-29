/* eslint-disable camelcase */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
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

  user_id: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Daily = mongoose.model("Image", imageSchema);

module.exports = Daily;
