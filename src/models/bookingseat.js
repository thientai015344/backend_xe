'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookingseats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bookingseats.belongsTo(models.managecars, { foreignKey: "ManegeId", });
      bookingseats.belongsTo(models.user, { foreignKey: "userId", });
      bookingseats.hasMany(models.seatbooks, { foreignKey: "bookingseatsId", });


      // define association here
    }
  };
  bookingseats.init({

    nameClient: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    price: DataTypes.STRING,
    ManegeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'bookingseats',
  });
  return bookingseats;
};