//establishes model for user mood entries
//this defines the format that the entries will use when added to db
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
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Mood',
  }
);

module.exports = Mood;