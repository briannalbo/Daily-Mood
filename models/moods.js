const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mood extends Model {}

Mood.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    hows_today: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    improve_day: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proud_today: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quote_descript: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // mood_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Mood',
  }
);

module.exports = Mood;