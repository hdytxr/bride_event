/**
 * cek user id di req.userData sudah sesuai belum?
 */

const { Music } = require("../models");

const authorization = async (req, res, next) => {
  try {
    let { id } = req.params;
    const music = await Music.findByPk(id);

    if (!music) {
      throw { msg: "Music not found!", statusCode: 404 };
    } else if (music.userId === req.userData.id) {
      next();
    } else {
      throw { name: "AuthenticationFailed!", statusCode: 401 };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { authorization };
