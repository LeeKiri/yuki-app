const router = require("express").Router();
const allRoutes = require("./allRoutes");
const imageRoute = require("./imageRoute");

router.use("/", allRoutes);
router.use("/", imageRoute);

module.exports = router;
