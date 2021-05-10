/* eslint-disable camelcase */
const passport = require("../../config/configLocalStrategy");
const isAuthenticated = require("../../config/isAuthenticated");
const router = require("express").Router();
const { User, Image } = require("../../models/index");

// Register User
router.post("/signup", (req, res) => {
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
router.post("/login", passport.authenticate("local"), (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };
  res.send(loginUser);
  console.log(loginUser, " authenticated");
});

//upload a text record
router.post("/upload/text", isAuthenticated, (req, res, cb) => {
  console.log(req.body, "req");
  const newRecord = new Image({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    user_id: req.body.userId,
  });
  newRecord
    .save()
    .then((result) => {
      console.log(result);
      User.findByIdAndUpdate(
        { _id: req.user._id },
        { $push: { images: result._id } }
      ).then(() => {
        res.status(200).json({
          success: true,
          document: result,
        });
      });
    })
    .catch((err) => cb(err));
});

// Endpoint to get current user and records of user
router.get("/user", (req, res) => {
  if (!req.user) {
    res.json(null);
  } else {
    User.findById({ _id: req.user.id })
      .populate({ path: "images", options: { sort: { date: -1 } } })
      .then((data) => {
        res.json(data);
      });
  }
});

// Endpoint to logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send(null);
});

module.exports = router;
