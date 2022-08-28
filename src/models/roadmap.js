'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roadmaps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roadmaps.hasMany(models.managecars, { foreignKey: "roadmapsId", });



      // define association here
    }
  };
  roadmaps.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'roadmaps',
  });
  return roadmaps;
};