import mongoose from ("mongoose");
const Schema = mongoose.Schema;

const dailySchema = new Schema({
  food: {
    type: Number,
    trim: true,
  },
  food_comments: {
    type: String,
    trim: true,
  },
    mood: {
    type: Number,
    trim: true,
},
mood_comments: {
    type: String,
    trim: true,
  },
    play: {
    type: Number,
    trim: true,
},
play_comments: {
    type: String,
    trim: true,
  },
    sleep: {
    type: Number,
    trim: true,
},
sleep_comments: {
    type: String,
    trim: true,
  },
   toileting: {
    type: Number,
    trim: true,
},
toileting_comments: {
    type: String,
    trim: true,
  },
    medication: {
    type: Number,
    trim: true,
},
medication_comments: {
    type: String,
    trim: true,
  },
  
additional_comments: {
    type: String,
    trim: true,
  },
 
  logCreated: {
    type: Date,
    default: Date.now
  }
});

const Daily = mongoose.model("Daily", dailySchema);
export default Daily;