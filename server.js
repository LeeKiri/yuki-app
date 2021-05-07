/* eslint-disable array-callback-return */
const express = require("express");
const session = require("express-session");
const passport = require("./config/configLocalStrategy");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: "*",
  },
});

//port
const PORT = process.env.PORT || 8080;

//serve up static assets to heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//middleware
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    proxy: true,
  })
);

//passport connection
app.use(passport.initialize());
app.use(passport.session());

//image upload with Multer
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//routes set
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/imageRoute.js"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//mongoose connection
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://lee:easy111@cluster0.n6art.mongodb.net/yuki?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

//socket.io connection
const newChatMessage = "newChatMessage";
const newUser = "newUser";
const users = [];

const getUsers = (roomId) => {
  const clients = io.sockets.adapter.rooms.get(roomId);
  if (clients) {
    const clientArr = Array.from(clients);
    const newList = clientArr.map((arr) => {
      const test = users.filter((user) => user.senderId === arr);
      // eslint-disable-next-line array-callback-return
      if (test.length === 0) {
        return;
      }
      console.log(test, "test");
      return test[0].user;
    });
    console.log(newList);
    return newList;
  }
};

io.on("connection", (socket) => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  const emitUsers = () => {
    io.to(roomId).emit("userList", getUsers(roomId));
  };

  socket.on(newChatMessage, (data) => {
    io.in(roomId).emit(newChatMessage, data);
    console.log(data, "server data 1");
  });

  socket.on(newUser, (data) => {
    users.push(data);
    console.log(newUser, data, "server data 2");
    console.log(users, "users");
    emitUsers();
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
    console.log("user disconnected");
    emitUsers();
  });
});

http.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
