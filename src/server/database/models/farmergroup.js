'use strict';
module.exports = (sequelize, DataTypes) => {
  const FarmerGroup = sequelize.define('FarmerGroup', {
    group_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    name_of_organization: DataTypes.STRING,
    institution_type: DataTypes.STRING,
    district: DataTypes.STRING,
    block: DataTypes.STRING,
    gram_panchayat: DataTypes.STRING,
    formation_date: DataTypes.DATE
  }, {});
  FarmerGroup.associate = function(models) {
    // associations can be defined here
  };
  return FarmerGroup;
};