const { Log } = require("../models/index");
const ImageRouter = express.Router();
const express = require("express");
const multer = require("multer");

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
