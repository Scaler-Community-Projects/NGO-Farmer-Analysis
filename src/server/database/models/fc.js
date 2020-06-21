'use strict';
module.exports = (sequelize, DataTypes) => {
  const FC = sequelize.define('FC', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    sex: DataTypes.STRING
  }, {});
  FC.associate = function(models) {
    // associations can be defined here
  };
  return FC;
};