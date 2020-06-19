const models=require('../models')

module.exports={
    newMeeting:function(description,scheduled_on,remarks,gram_panchayat,village,video_name,start_time,end_time,done){
     models.Meeting.create({
        description:description,
        scheduled_on:scheduled_on,
        remarks:remarks,
        gram_panchayat:gram_panchayat, 
        village:village, 
        video_name:video_name, 
        start_time:start_time,
        end_time:end_time
     }).then(function(data){
         done(null,data)
     }).catch(function(err){

         done(err)
     })
    },
    getMeeting:function(done){
        models.Meeting.findAll()
        .then(function(data){
            done(null,data)
        })
        .catch(function(err){
            done(err)
        })
    }
    
}