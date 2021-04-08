import app from ("express").Router();
import {Cat, User, Vet, Medication, Daily} from ("../models/index")

//create 
app.post("/api/cat", ({ body }, res) => {
  Cat.create(body)
    .then(dbCat => {
      res.json(dbCat);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/user", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/vet", ({ body }, res) => {
  Vet.create(body)
    .then(dbVet => {
      res.json(dbVet);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/daily", ({ body }, res) => {
  Daily.create(body)
    .then(dbDaily => {
      res.json(dbDaily);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/medication", ({ body }, res) => {
  Medication.create(body)
    .then(dbMedication => {
      res.json(dbMedication);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//read
app.get("/user/all", (req, res) => {
  db.User.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
app.get("/cat/all", (req, res) => {
  db.Cat.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
app.get("/medication/all", (req, res) => {
  db.Medication.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
app.get("/daily/all", (req, res) => {
  db.Daily.find({}, (err, data) => {
    if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
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