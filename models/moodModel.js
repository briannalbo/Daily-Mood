const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class moodModel extends Model {}

moodModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mood_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    moodName_id: {
      type: DataTypes.INTEGER,
    //   references: {
        // model: ' ',
        // key: 'id',
    //   },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'moodModel',
  }
);

module.exports = moodModel;
