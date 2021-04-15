const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({

title: {
    type: String,
    trim: true,
  },
  
comments: {
    type: String,
    trim: true,
  },

  img:
  {
      data: Buffer,
      contentType: String
  },
 
  logCreated: {
    type: Date,
    default: Date.now
  }
});
const multer = require('multer');
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
const upload = multer({ storage: storage });
const Daily = mongoose.model("Daily", dailySchema);

module.exports= Daily;