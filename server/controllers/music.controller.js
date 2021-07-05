const { Music } = require("../models");

const findAll = async (req, res) => {
  try {
    const musics = await Music.findAll({
      where: {
        userId: req.userData.id,
      },
    });
    res.status(200).json({
      data: musics,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const music = await Music.findByPk(id);

    if (!music) throw { msg: "Music not found!" };

    res.status(200).json({
      data: music,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const create = async (req, res) => {
  try {
    const { title, genre, artist } = req.body;
    const newMusic = await Music.create({
      title,
      genre,
      artist,
      userId: req.userData.id,
    });

    res.status(201).json({
      newMusic,
    });
  } catch (error) {
    console.log(err, "<== error create");
    res.status(500).json({ msg: err });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMusic = await Music.findByPk(id);

    if (!deleteMusic) throw { msg: "Music not found!" };

    deleteMusic.destroy();
    res.status(200).json({ deletedMusic: deleteMusic });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genre, artist } = req.body;

    let music = await Music.findByPk(id);
    if (!music) throw { msg: "Music not found" };

    music.title = title;
    music.genre = genre;
    music.artist = artist;

    await music.save();

    res.status(200).json({
      title: music.title,
      genre: music.genre,
      artist: music.artist,
    });
  } catch (err) {
    console.log(err, "<== error");
    res.status(500).json({ err });
  }
};

module.exports = { findAll, create, destroy, getById, update };
