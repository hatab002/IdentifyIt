const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router
    .route("/:id")
    .get((req, res) => {
        fs.createReadStream(path.join("./uploads", req.params.id)).pipe(res)
    })

module.exports = router;
