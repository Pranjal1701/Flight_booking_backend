"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      flightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: [ 'INITIATED' , 'PENDING' , 'BOOKED', 'CANCELLED'],
        defaultValue: 'INITIATED',
        allowNull: false,
      },
      noOfSeats : {  // the no of seats requested by the user to book
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:1

      },
      totalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
