import passport from "../config/passport";
import isAuthenticated from "../config/isAuthenticated";
import app from ("express").Router();
import {Cat, User, Vet, Medication, Daily} from ("../models/index")

//create 
//user signup
app.post("/signup", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//create cat
app.post("/cat", ({ body }, res) => {
  Cat.create(body)
    .then(dbCat => {
      res.json(dbCat);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//create vet app
app.post("/vet", ({ body }, res) => {
  Vet.create(body)
    .then(dbVet => {
      res.json(dbVet);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//create daily log
app.post("/daily", ({ body }, res) => {
  Daily.create(body)
    .then(dbDaily => {
      res.json(dbDaily);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//create medication log
app.post("/medication", ({ body }, res) => {
  Medication.create(body)
    .then(dbMedication => {
      res.json(dbMedication);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//read
// login user
app.post("/login", (req, res, next) => {
  passport.authenticate("local"), (req, res) => {
    const loginUser = {
      email: req.user.email,
      id: req.yser.id,
      name: req.user.name,
    };
    res.json(loginUser);
  }
})

//get all user data
app.get("/user/all", (req, res) => {
  db.User.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
//get all cat data
app.get("/cat/all", (req, res) => {
  db.Cat.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
//get all medication data
app.get("/medication/all", (req, res) => {
  db.Medication.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
// get all daily log data
app.get("/daily/all", (req, res) => {
  db.Daily.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
//get all vet data
app.get("/vet/all", (req, res) => {
  db.Vet.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

//update

//delete

module.exports = app;