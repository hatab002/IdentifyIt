const router = require("express").Router();
const commentsRoute = require("./comments");
const picturesRoute = require("./pictures");
const usersRoute = require("./users");
const uploadsRoute = require("./uploads");

//Comments Route
router.use("/comments", commentsRoute);

//Pictures Route
router.use("/pictures", picturesRoute);

//Users Route
router.use("/users", usersRoute);

//Uploads Route
router.use("/uploads", uploadsRoute);

module.exports = router;
