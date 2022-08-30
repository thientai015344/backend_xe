'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cars.hasMany(models.managecars, { foreignKey: "carId", });
      cars.hasMany(models.commodities, { foreignKey: "commonCarId", });

      // define association here
    }
  };

  cars.init({
    platesCar: DataTypes.STRING,
    status: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'cars',
  });
  return cars;
};