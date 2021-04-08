import mongoose from ("mongoose");
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
  medication_name: {
    type: String,
    trim: true,
    required: "The vets name is Required"
  },
  date_started: {
    type: Date,
    trim: true,
    required: "The date is Required"
},
dosage: {
    type: String,
    trim: true,
    required: "The dosage is Required"
  },
  frequency: {
      type: String,
      trim: true,
  },
  method: {
      type: String,
      trim: true,
  },
  length_of_course: {
      type: String,
      trim: true,
  },
  cats_symptoms: {
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
const Medication = mongoose.model("Medication", medicationSchema);
export default Medication;