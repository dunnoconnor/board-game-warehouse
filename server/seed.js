const {games} = require('./seedData.js');

const {sequelize} = require('./db');
const {Game} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(games.map(game => Game.create(game)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
