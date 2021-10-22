'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require ('sequelize');
const FoodModel = require ('./food.js')
const ClothesModel = require ('./clothes.js')


let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';



// template permissions: `postgresql://username:pass@localhost:5432/db-name



//  HEADS UP:  our PRODUCTION database requires some extra config ------->
const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};


//------------------->

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

// const sequelizeInstance = new Sequelize(DATABASE_URL);



const foodTable = FoodModel(sequelizeInstance, DataTypes);

const clothesTable = ClothesModel(sequelizeInstance, DataTypes);

module.exports ={
  db: sequelizeInstance,
  food: foodTable,
  clothes: clothesTable
}