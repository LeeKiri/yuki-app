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
app.use(require("./routes"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yuki", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//socket.io connection and functionality
const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
const NEW_USER_EVENT = "NEW_USER_EVENT";
const users = [];

const getUsers = (roomId) => {
  const clients = io.sockets.adapter.rooms.get(roomId);
  if (clients) {
    const clientArr = Array.from(clients);
    const newList = clientArr.map((arr) => {
      const filteredList = users.filter((user) => user.senderId === arr);
      // eslint-disable-next-line array-callback-return
      if (filteredList.length === 0) {
        return;
      }
      return filteredList[0].user;
    });
    return newList;
  }
};

io.on("connection", (socket) => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  const emitUsers = () => {
    io.to(roomId).emit("userList", getUsers(roomId));
  };

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on(NEW_USER_EVENT, (data) => {
    users.push(data);
    emitUsers();
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
    emitUsers();
  });
});

http.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
