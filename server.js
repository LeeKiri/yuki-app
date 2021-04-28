const express = require("express");
const session = require("express-session");
const passport = require("./config/configLocalStrategy");
const mongoose = require("mongoose");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: "*",
  },
});

//port
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
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
app.use(require("./routes/imageRoute.js"));

//image upload with Multer
app.use("/uploads", express.static("uploads"));

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
  console.log("this is server");
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

http.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
