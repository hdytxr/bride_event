const router = require("express").Router();
const musicController = require("../controllers/music.controller");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

router.use(authentication);
router.get("/", musicController.findAll);
router.post("/", musicController.create);
router.get("/:id", authorization, musicController.getById);
router.delete("/:id", authorization, musicController.destroy);
router.put("/:id", authorization, musicController.update);

module.exports = router;
