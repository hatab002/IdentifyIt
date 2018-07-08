const router = require("express").Router();
const picturesController = require("../../controllers/picturesController");


router.route("/")
    .get(picturesController.findAll)
    .post(picturesController.create);

router
    .route("/:id")
    .get(picturesController.findById)
    .put(picturesController.update)
    .delete(picturesController.remove);

module.exports = router;