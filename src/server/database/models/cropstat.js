'use strict';
module.exports = (sequelize, DataTypes) => {
  const CropStat = sequelize.define('CropStat', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    area: DataTypes.DOUBLE,
    yield: DataTypes.DOUBLE,
    net_income: DataTypes.INTEGER,
    incremental_yield: DataTypes.DOUBLE,
    incremental_income: DataTypes.INTEGER,
    incremental_biomass_yield: DataTypes.DOUBLE,
    water_saved: DataTypes.DOUBLE,
    fuel_saved: DataTypes.DOUBLE,
    man_days_generated: DataTypes.INTEGER
  }, {});
  CropStat.associate = function(models) {
    // associations can be defined here
  };
  return CropStat;
};