const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('nha72484_xe', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  operatorsAliases: 0
});

let connectDB = async () => {

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }




}

module.exports = connectDB;
