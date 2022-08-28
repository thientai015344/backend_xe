'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commodities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      commodities.belongsTo(models.cars, { foreignKey: "commonCarId", });

      // commodities.hasMany(models.playlists,{ foreignKey: "commoditiesId",});
      // commodities.hasMany(models.librytracks,{ foreignKey: "commoditiesId",});


      // define association here
    }
  };
  commodities.init({
    descriptioncommodities: DataTypes.STRING,
    price: DataTypes.STRING,
    commonCarId: DataTypes.INTEGER,
    dateinput: DataTypes.DATE



  }, {
    sequelize,
    modelName: 'commodities',
  });
  return commodities;
};