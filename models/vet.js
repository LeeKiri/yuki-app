import mongoose from ("mongoose");

const Schema = mongoose.Schema;

const vetSchema = new Schema({
  vet_name: {
    type: String,
    trim: true,
    required: "The vets name is Required"
  },
  date: {
    type: Date,
    trim: true,
    required: "The date is Required"
  },
  vaccination: {
    type: Boolean,
  },
  vaccination_details: {
      type: String,
  },
  comments: {
      type: String,
  },
  vetCreated: {
    type: Date,
    default: Date.now
  }
});
const Vet = mongoose.model("Vet", vetSchema);
export default Vet;