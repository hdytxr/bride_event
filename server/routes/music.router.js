const router = require("express").Router();
const musicController = require("../controllers/music.controller");

router.get("/", musicController.findAll);
router.post("/", musicController.create);
router.delete("/:id", musicController.delete);

module.exports = router;
