/* eslint-disable camelcase */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  cat_name: {
    type: String,
    trim: true,
    required: "The cats name is Required",
  },
  age: {
    type: Number,
    trim: true,
  },
  rescue_date: {
    type: Date,
    trim: true,
  },
  catCreated: {
    type: Date,
    default: Date.now,
  },
});
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
