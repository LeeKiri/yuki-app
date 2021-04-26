/* eslint-disable camelcase */
const passport = require("../config/configLocalStrategy");
const isAuthenticated = require("../config/isAuthenticated");
const app = require("express").Router();
const { User, Log } = require("../models/index");

app.post("/log", ({ body }, res) => {
  Log.create(body)
    .then((dbLog) => {
      res.json(dbLog);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get all log data
app.get("/log", isAuthenticated, (req, res) => {
  Daily.find({}, (err, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// Register User
app.post("/api/signup", (req, res) => {
  const password = req.body.password;
  const password2 = req.body.password2;

  if (password === password2) {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      cat_name: req.body.catName,
      adoption_date: req.body.adoptionDate,
    });

    User.createUser(newUser, (err, user) => {
      if (err) {
        throw err;
      }
      res.send(user).end();
    });
  } else {
    res.status(500).send({ errors: "Passwords don't match" }).end();
  }
});
// Endpoint to login
app.post("/api/login", passport.authenticate("local"), (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };
  res.send(loginUser);
  console.log(loginUser, " authenticated");
});

// Endpoint to get current user
app.get("/api/user", isAuthenticated, (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    console.log("res on server", req.user);
    res.json(req.user);
  }
});

// Endpoint to logout
app.get("/logout", (req, res) => {
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
