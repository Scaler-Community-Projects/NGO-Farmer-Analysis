'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define('Farmer', {
    farmer_id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    father_name: DataTypes.STRING,
    mother_name: DataTypes.STRING,
    spouse_name: DataTypes.STRING,
    category: DataTypes.STRING,
    land_in_holding: DataTypes.STRING,
    designation: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  Farmer.associate = function(models) {
  };
  return Farmer;
};