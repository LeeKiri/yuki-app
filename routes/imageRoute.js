const { Image } = require("../models/index");
const multer = require("multer");
const express = require("express");
const ImageRouter = express.Router();

const storage = multer.diskStorage({
    destination: funtion (req, file, cb) {
        cb(null, "./uploads");
    }
});

const filefilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

ImageRouter.route("/uploadmulter")
.post(upload.single("imageData"), (req, res, cb) => {
    console.log(req.body);
    const newImage = new Image({
        title: req.body.title,
        description: req.body.description,
        imageData: req.file.path,
    });

    newImage.save()
    .then((result) => {
        console.log(result);
        res.status(200).json({
            success: true,
            document:result
        });
    })
    .catch((err) => cb(err))
})
