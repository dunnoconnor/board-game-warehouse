const {Sequelize} = require('sequelize');
const {sequelize} = require('../db');

const Game = sequelize.define("games", {
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  image: Sequelize.STRING,
  rating: Sequelize.FLOAT,
  price: Sequelize.FLOAT,
  description: Sequelize.STRING,
  stock: Sequelize.INTEGER,
});

module.exports = {
  db: sequelize,
  Game,
};
