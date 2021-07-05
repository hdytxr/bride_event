"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Music.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Title is required",
          },
        },
      },
      genre: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Genre is required",
          },
        },
      },
      artist: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Artist is required",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Music",
    }
  );
  return Music;
};
