'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class managecars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      managecars.belongsTo(models.user, { foreignKey: "userId", });
      managecars.belongsTo(models.cars, { foreignKey: "carId", });
      managecars.belongsTo(models.roadmaps, { foreignKey: "roadmapsId", });
      managecars.hasMany(models.bookingseats, { foreignKey: "ManegeId", });
      managecars.hasMany(models.consignments, { foreignKey: "carhangId", });


      // define association here
    }
  };
  managecars.init({
    date: DataTypes.DATE,
    carId: DataTypes.INTEGER,
    roadmapsId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    userId: DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'managecars',
  });
  return managecars;
};