const router = require("express").Router();
const musicController = require("../controllers/music.controller");
const { authentication } = require("../middlewares/authentication");

router.use(authentication);
router.get("/", musicController.findAll);
router.post("/", musicController.create);
router.delete("/:id", musicController.destroy);
router.get("/:id", musicController.getById);
router.put("/:id", musicController.update);

module.exports = router;
