const mongoose = require("mongoose");
// const passport =require ("passport");
const bcrypt = require("bcryptjs");
// const LocalStrategy = require ("passport-local").Strategy;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    // validate: [({ length }) => length >= 6, "Password should be longer."],
  },

  email: {
    type: String,
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};
module.exports.getUserByUsername = function (username, callback) {
  var query = { username: username };
  User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};



