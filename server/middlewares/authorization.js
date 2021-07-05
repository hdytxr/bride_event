/**
 * cek user id di req.userData sudah sesuai belum?
 */

const { Music } = require("../models");

const authorization = async (req, res, next) => {
  try {
    let { id } = req.params;
    const music = await Music.findByPk(id);

    if (!music) {
      throw { msg: "Music not found!" };
    } else if (music.userId === req.userData.id) {
      next();
    } else {
      throw { msg: "You're not authorize!" };
    }
  } catch (err) {
    console.log(err, "<== error authorization");
    res.status(500).json({ error: err.msg || "Internal server error!" });
  }
};

module.exports = { authorization };
