const { Image } = require("../models/index");
const multer = require("multer");
const imageRouter = require("express").Router();
const isAuthenticated = require("../config/isAuthenticated");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.origionalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

imageRouter.post(
  "/api/upload",
  isAuthenticated,
  upload.single("imageData"),
  (req, res, cb) => {
    console.log(req.body);
    const newImage = new Image({
      title: req.body.title,
      description: req.body.description,
      imageData: req.file.path,
    });

    newImage
      .save()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          success: true,
          document: result,
        });
      })
      .catch((err) => cb(err));
  }
);

module.exports = imageRouter;
