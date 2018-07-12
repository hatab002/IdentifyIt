const router = require("express").Router();
const commentsRoute = require("./comments");
const picturesRoute = require("./pictures");
const userRoute = require("./user");

//Comments Route
router.use("/comments", commentsRoute);

//Pictures Route
router.use("/pictures", picturesRoute);

//Users route
router.use("/user", userRoute);

module.exports = router;