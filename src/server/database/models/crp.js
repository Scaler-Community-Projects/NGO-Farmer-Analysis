'use strict';
module.exports = (sequelize, DataTypes) => {
  const CRP = sequelize.define('CRP', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    sex: DataTypes.STRING
  }, {});
  CRP.associate = function(models) {
    // associations can be defined here
  };
  return CRP;
};