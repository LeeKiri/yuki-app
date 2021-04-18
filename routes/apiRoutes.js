const passport = require("../config/localStrategy");
const isAuthenticated = require("../config/isAuthenticated");
const app = require("express").Router();
const { Cat, User, Log } = require("../models/index");

//create cat
app.post("/cat", ({ body }, res) => {
  Cat.create(body)
    .then((dbCat) => {
      res.json(dbCat);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get all cat data
app.get("/cat/all", (req, res) => {
  Cat.find({}, (err, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// get all log data
app.get("/log", (req, res) => {
  Daily.find({}, (err, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
// Register User
app.post("/signup", function (req, res) {
  var password = req.body.password;
  var password2 = req.body.password2;

  if (password == password2) {
    var newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    User.createUser(newUser, function (err, user) {
      if (err) throw err;
      res.send(user).end();
    });
  } else {
    res.status(500).send('{errors: "Passwords don\'t match"}').end();
  }
});
// Endpoint to login
app.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(req.user);
});

// Endpoint to get current user
app.get("/user", function (req, res) {
  res.send(req.user);
});

// Endpoint to logout
app.get("/logout", function (req, res) {
  req.logout();
  res.send(null);
});

// route to post Image and log
// app.post('/log', upload.single('image'), (req, res, next) => {

//   var obj = {
//       title: req.body.name,
//       comments: req.body.comments,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           contentType: 'image/png'
//       }
//   }
//   Log.create(obj, (err, item) => {
//       if (err) {
//           console.log(err);
//       }
//       else {
//           // item.save();
//           res.redirect('/');
//       }
//   });
// });
module.exports = app;
