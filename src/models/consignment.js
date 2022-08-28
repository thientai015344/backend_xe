'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      consignments.belongsTo(models.typecommodities, { foreignKey: "typecommoditiesId", });
      consignments.belongsTo(models.managecars, { foreignKey: "carhangId", });


      // consignments.hasMany(models.playlists,{ foreignKey: "consignmentsId",});
      // consignments.hasMany(models.librytracks,{ foreignKey: "consignmentsId",});


      // define association here
    }
  };
  consignments.init({
    name: DataTypes.STRING,
    nameUserSend: DataTypes.STRING,
    phonenumberUserSend: DataTypes.STRING,
    nameUserGet: DataTypes.STRING,
    phonenumberUserGet: DataTypes.STRING,
    typecommoditiesId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    price: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    carhangId: DataTypes.INTEGER






  }, {
    sequelize,
    modelName: 'consignments',
  });
  return consignments;
};