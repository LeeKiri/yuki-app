/* eslint-disable camelcase */
const passport = require("../config/configLocalStrategy");
const isAuthenticated = require("../config/isAuthenticated");
const app = require("express").Router();
const { User, Image } = require("../models/index");

// get all image data
app.get("/api/records/:id", isAuthenticated, (req, res) => {
  Image.find({ user_id: req.params.id }).then((data) => {
    res.json(data);
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
    User.findById({ _id: req.user.id })
      .populate("images")
      .then((data) => {
        res.json(data);
      });
    console.log("res on server", req.user);
    // res.json(req.user);
  }
});

// Endpoint to logout
app.get("/logout", (req, res) => {
  req.logout();
  res.send(null);
});

module.exports = app;
