const router = require("express").Router();
const picturesController = require("../../controllers/picturesController");
const multer  = require("multer");
const upload = multer({ dest: "uploads/" });


router.route("/")
    .get(picturesController.findAll)
    .post(upload.single("picture"), picturesController.create);

router
    .route("/:id")
    .get(picturesController.findById)
    .put(picturesController.update)
    .delete(picturesController.remove);

module.exports = router;
