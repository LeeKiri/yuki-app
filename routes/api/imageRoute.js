/* eslint-disable camelcase */
const { Image, User } = require("../../models/index");
const multer = require("multer");
const imageRouter = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
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
  "/upload",
  isAuthenticated,
  upload.single("imageData"),
  (req, res, cb) => {
    const newImage = new Image({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      user_id: req.body.userId,
      image: req.file.path,
    });

    newImage
      .save()
      .then((result) => {
        User.findByIdAndUpdate(
          { _id: req.user._id },
          { $push: { images: result._id } }
        ).then(() => {
          res.status(200).json({
            success: true,
            document: result,
          });
        });
      })
      .catch((err) => cb(err));
  }
);

module.exports = imageRouter;
