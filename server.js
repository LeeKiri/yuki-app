const express = require("express");
const session = require("express-session");
const passport = require("./config/configLocalStrategy");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 36000000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/apiRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// const db = mongoose.connection;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
