'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require ('sequelize');
const FoodModel = require ('./food.js')
const ClothesModel = require ('./clothes.js')
const channelModel = require('./channel.js');
const messageModel = require('./message.js');

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
const messages = messageModel(sequelizeInstance, DataTypes);
const channels = channelModel(sequelizeInstance, DataTypes);

channels.hasMany(messages, { foreignKey: 'channelId', sourceKey: 'id'});
messages.belongsTo(channels, { foreignKey: 'channelId', targetKey: 'id'});
module.exports ={
  db: sequelizeInstance,
  food: foodTable,
  clothes: clothesTable,
  channels,
  messages,
}