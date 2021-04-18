const passport = require("../config/configLocalStrategy");
// const isAuthenticated = require("../config/isAuthenticated");
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

app.post("/log", ({ body }, res) => {
  Log.create(body)
    .then((dbLog) => {
      res.json(dbLog);
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

// Register User
app.post("/signup", (req, res) => {
  const password = req.body.password;
  const password2 = req.body.password2;

  if (password === password2) {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
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
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

// Endpoint to get current user
app.get("/user", (req, res) => {
  res.send(req.user);
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
