'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.managecars, { foreignKey: "userId", });
      user.hasMany(models.consignments, { foreignKey: "userId", });
      user.hasMany(models.bookingseats, { foreignKey: "userId", });


      // define association here
    }
  };
  user.init({
    username: DataTypes.STRING,
    interfaceName: DataTypes.STRING,
    password: DataTypes.STRING,
    phonenumber: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};