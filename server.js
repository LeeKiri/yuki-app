import express from ("express");
import session from ("express-session");
import passport from ("./config/passport");
import mongoose from ("mongoose");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 36000000 }
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes.js")(app);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  