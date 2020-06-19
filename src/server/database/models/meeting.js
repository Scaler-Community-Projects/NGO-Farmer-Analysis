'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meeting = sequelize.define('Meeting', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    is_present: DataTypes.BOOLEAN,
    adoption_wish: DataTypes.STRING,
    questions_asked: DataTypes.STRING,
    crp_remarks: DataTypes.STRING
  }, {});
  Meeting.associate = function(models) {
    // associations can be defined here
  };
  return Meeting;
};