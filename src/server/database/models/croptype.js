'use strict';
module.exports = (sequelize, DataTypes) => {
  const CropType = sequelize.define('CropType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING
  }, {});
  CropType.associate = function(models) {
    // associations can be defined here
  };
  return CropType;
};