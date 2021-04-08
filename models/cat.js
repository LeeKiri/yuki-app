import mongoose from ("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  cat_name: {
    type: String,
    trim: true,
    required: "The cats name is Required"
  },
  age: {
    type: Number,
    trim: true,
    required: "You can enter an estimate here"
  },
  rescue_date: {
    type: Date,
    trim: true,
    required: "The date is Required"
  },
  catCreated: {
    type: Date,
    default: Date.now
  }
});
const Cat = mongoose.model("Cat", catSchema);
export default Cat;