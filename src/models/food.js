'use strict';

const Food = (sequelize, DataTypes) =>
sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
});

module.exports = Food;