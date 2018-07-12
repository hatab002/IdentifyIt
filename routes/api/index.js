const router = require("express").Router();
const commentsRoute = require("./comments");
const picturesRoute = require("./pictures");
const usersRoute = require("./users");

//Comments Route
router.use("/comments", commentsRoute);

//Pictures Route
router.use("/pictures", picturesRoute);

//Users Route
router.use("/users", usersRoute);

module.exports = router;
