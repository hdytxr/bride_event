const { Music } = require("../models");

class MusicController {
  static async findAll(req, res) {
    try {
      const musics = await Music.findAll();
      res.status(200).json({ data: musics });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  static async create(req, res) {
    try {
      const { title, genre, artist } = req.body;
      const newMusic = await Music.create({
        title,
        genre,
        artist,
      });
      res.status(201).json({
        newMusic,
      });
    } catch (err) {
      console.log(err, "<=== error create");
      res.status(500).json({ msg: err });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteMusic = await Music.findByPk(id);

      if (!deleteMusic) {
        throw { msg: "Music not found!" };
      } else {
        deleteMusic.destroy();
        res.status(200).json({ deletedMusic: deleteMusic });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = MusicController;
