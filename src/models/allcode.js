'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allcodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      allcodes.hasMany(models.seatbooks, { foreignKey: "seatId", });



      // define association here
    }
  };
  allcodes.init({
    type: DataTypes.STRING,
    key: DataTypes.STRING,
    value: DataTypes.STRING,



  }, {
    sequelize,
    modelName: 'allcodes',
  });
  return allcodes;
};