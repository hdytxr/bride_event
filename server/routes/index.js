const router = require("express").Router();
const musicRouter = require("./music.router");

router.get("/", (req, res) => {
  res.json({ msg: "welcome to dublin fox" });
});

router.use("/api/v1/musics", musicRouter);

module.exports = router;
