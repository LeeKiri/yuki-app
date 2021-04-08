import mongoose from ("mongoose");
import bcrypt from ("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

//password hashing with bcrypt
// User.encryptPassword('anotherSecret', function(err, encryptedValue) {
//   if (err) {
//     console.log(err);
//   } else {
//     // Do something with encrypted data
//     console.log('Encrypted password is ' + encryptedValue);
//   }
// });
// // Using promises
// Demo.encryptPassword('anotherSecret')
//   .then(function(encryptedValue) {
//     // Do something with encrypted data
//     console.log('Encrypted password is ' + encryptedValue);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// });

userSchema.pre("save", function(next){
  if(!this.isModified("password"))
  return next()
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if(err)
    return next(err)
    this.password = passwordHash;
    next()
  })
})
userSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch)=>{
    if(err)
    return cb(err);
    else {
      if(!isMatch)
      returncb(null, isMatch);
      return cb(null, this);
    }
  })
}
export default User;