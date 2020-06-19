/**
 * Created on 14/6/20.
 */
const Sequelize = require('sequelize');
const config = require('../config')
const dbconfig =config

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host:config.HOST,
    dialect:config.DIALECT,
    pool:{
        max:5,
        min:5
    },
  });


  const FarmerGroup=sequelize.define('farmergroups',{
    id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.DataTypes.STRING,
    name_of_organization: Sequelize.DataTypes.STRING,
    institution_type: Sequelize.DataTypes.STRING,
    district: Sequelize.DataTypes.STRING,
    block:Sequelize.DataTypes.INTEGER,
    gram_panchayat:Sequelize.DataTypes.STRING,
    
  });
  const Farmer=sequelize.define('farmers',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.DataTypes.STRING,
    father_name: Sequelize.DataTypes.STRING,
    mother_name: Sequelize.DataTypes.STRING,
    spouse_name: Sequelize.DataTypes.STRING,
    sex:Sequelize.DataTypes.STRING,
    phone_number:Sequelize.DataTypes.STRING,
    designation:Sequelize.DataTypes.STRING,
    category:Sequelize.DataTypes.STRING,
    land_in_holding:Sequelize.DataTypes.STRING
});
  
  const Meeting=sequelize.define('meetings',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description:Sequelize.DataTypes.STRING,
    
    scheduled_on:Sequelize.DataTypes.DATE,
    remarks:Sequelize.DataTypes.STRING,
    gram_panchayat:Sequelize.DataTypes.STRING,
    village:Sequelize.DataTypes.STRING,
    video_name:Sequelize.DataTypes.STRING,
    start_time:Sequelize.DataTypes.TIME,
    end_time:Sequelize.DataTypes.TIME
});


 const FC=sequelize.define('fcdata',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.DataTypes.STRING, 
    phone_number:Sequelize.DataTypes.STRING,
    sex:Sequelize.DataTypes.STRING,
  });

  const CRP=sequelize.define('crpdata',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.DataTypes.STRING, 
    phone_number:Sequelize.DataTypes.STRING,
    sex:Sequelize.DataTypes.STRING,
  });

  const MKS=sequelize.define('mksdata',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.DataTypes.STRING, 
    phone_number:Sequelize.DataTypes.STRING,
    sex:Sequelize.DataTypes.STRING,
  });



  const Survey=sequelize.define('surveys',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    description:Sequelize.DataTypes.STRING,  
  })

  const SurveyQuestion=sequelize.define('surveyquestions',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    question:Sequelize.DataTypes.STRING,  
  })

  const SurveyQuesAnswerOptions=sequelize.define('surveyquestionansweroptions',{
      id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      answer:Sequelize.DataTypes.STRING
  })

  const Crop=sequelize.define('crops',{
    id:{type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type:Sequelize.DataTypes.STRING
  })

  const CropStats=sequelize.define('cropstats',{
    farmerId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model:Farmer, 
        key: 'id'
      }
    },
    cropId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: Crop, 
        key: 'id'
      }
    },
    area:Sequelize.DataTypes.DOUBLE,
    incremental_grain_yield:Sequelize.DataTypes.INTEGER,
    incremental_biomass_yield:Sequelize.DataTypes.INTEGER,
    incremental_income:Sequelize.DataTypes.INTEGER,
    num_incremental_man_days:Sequelize.DataTypes.INTEGER,
    water_saved:Sequelize.DataTypes.DOUBLE

  })

  const FarmerMeeting=sequelize.define('farmerMeeting',{
    farmerId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model:Farmer, 
        key: 'id'
      }
    },
    meetingId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: Meeting, 
        key: 'id'
      }
    },
    is_present:Sequelize.DataTypes.CHAR,
    adoption_wish:Sequelize.DataTypes.DOUBLE,
    questions_asked:Sequelize.DataTypes.STRING
  })

  // Adding Associations for the tables

  FarmerGroup.hasMany(Farmer);
 

  CRP.hasMany(Farmer);
 

  FC.hasMany(CRP);
 

  MKS.hasMany(FC);
  

  CRP.hasMany(Meeting);
 

  Meeting.belongsToMany(Farmer,{through:FarmerMeeting});

  Farmer.belongsToMany(Crop,{through:CropStats});


  exports=module.exports={
    FarmerGroup,Farmer,FC,CRP,MKS,Meeting,Crop,CropStats,DATABASE: sequelize
}

