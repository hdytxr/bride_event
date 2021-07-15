const router = require("express").Router();
const musicRouter = require("./music.router");
const userRouter = require("./user.router");

router.get("/", (req, res) => {
  res.json({ msg: "welcome to brideve" });
});

router.use("/api/v1/musics", musicRouter);
router.use("/api/v1/users", userRouter);

module.exports = router;
