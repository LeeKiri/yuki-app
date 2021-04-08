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

//read
app.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//update

//delete

module.exports = app;