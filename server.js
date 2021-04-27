const express = require("express");
const session = require("express-session");
const passport = require("./config/configLocalStrategy");
const mongoose = require("mongoose");
const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

//port
const PORT = process.env.PORT || 8080;

//middleware
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

//passport connection
app.use(passport.initialize());
app.use(passport.session());

//routes set
app.use(require("./routes/apiRoutes.js"));

//mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yuki", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//socketio connection
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
