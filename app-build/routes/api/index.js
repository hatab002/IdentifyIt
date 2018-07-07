const router = require("express").Router();
const commentsRoute = require("./comments");
const picturesRoute = require("./pictures");

//Comments Route
router.use("/comments", commentsRoute);

//Pictures Route
router.use("/pictures", picturesRoute);

module.exports = router;