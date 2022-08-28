'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seatbooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      seatbooks.belongsTo(models.bookingseats, { foreignKey: "bookingseatsId", });
      seatbooks.belongsTo(models.allcodes, { foreignKey: "seatId", });

      // define association here
    }
  };
  seatbooks.init({
    bookingseatsId: DataTypes.INTEGER,
    seatId: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'seatbooks',
  });
  return seatbooks;
};