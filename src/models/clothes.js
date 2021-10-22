'use strict';

const Clothes = (sequelize, DataTypes) =>
sequelize.define('Clothes',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fabric:{
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = Clothes;