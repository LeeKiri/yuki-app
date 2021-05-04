const express = require("express");
const session = require("express-session");
const passport = require("./config/configLocalStrategy");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");

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
  app.use("/", express.static(path.join(__dirname, "client/build")));
}

//middleware
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(cors({ credentials: true }));
app.use(cookieParser);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
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
    console.log("a user disconnected");
  });
});

http.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
