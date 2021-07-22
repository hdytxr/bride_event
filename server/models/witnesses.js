'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Witnesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Witnesses.init({
    image: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notNull: {
          args: true,
          msg: "Image is required"
        },
        notEmpty: {
          args: true,
          msg: "Image is required"
        }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          args: true,
          msg: "Title is required"
        },
        notEmpty: {
          args: true,
          msg: "Title is required"
        }
      }
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: {
          args: true,
          msg: "Date is required"
        },
        notEmpty: {
          args: true,
          msg: "Date is required"
        }
      }
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          args: true,
          msg: "Content is required"
        },
        notEmpty: {
          args: true,
          msg: "Content is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Witnesses',
  });
  return Witnesses;
};