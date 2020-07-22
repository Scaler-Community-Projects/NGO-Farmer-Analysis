var knex = require('../utilities/createKnexPGConnection');
const config = require('../config');

exports.getAllDisseminations = (req, res, next) => {
    //returns all the Disseminations
    knex.withSchema(config.pgConfig.schema)
    .table('dissemination')
    .select('dissemination.dissemination_id',
            'dissemination.date_of_dissemination',
            'dissemination.start_time',
            'dissemination.end_time',
            'dissemination.name_of_video',
            'dissemination.place',
            'dissemination.village_name',
            'dissemination.gram_panchayat',
            'farmer.name',
            'farmer.father_name',
            'farmer.spouse_name',
            'adoption_table.adp_name',
            'question_table.question'
    )
    .leftJoin('dissemination_attendee_mapping','dissemination.dissemination_id', 'dissemination_attendee_mapping.dissemination_id')
    .leftJoin('farmer', 'farmer.farmer_id' , 'dissemination_attendee_mapping.farmer_id')
    .leftJoin('question_table','question_table.q_id' , 'dissemination_attendee_mapping.question_id')
    .leftJoin('adoption_table', 'adoption_table.adp_id' , 'dissemination_attendee_mapping.adoption_id')
    .then(function (rows) {
        next(null, rows);
    })
    .catch(function (err) {
        next(err);
    });
};

exports.saveDissemination = (req, res, next) => {
    //Save a particular Dissemination in database
};

exports.getDisseminationById = (req, res, next) => {
    //Gets particular Dissemination from database
    const id = req.id;
    knex.withSchema(config.pgConfig.schema)
    .table('dissemination')
    .select('dissemination.dissemination_id',
            'dissemination.date_of_dissemination',
            'dissemination.start_time',
            'dissemination.end_time',
            'dissemination.name_of_video',
            'dissemination.place',
            'dissemination.village_name',
            'dissemination.gram_panchayat',
            'farmer.name',
            'farmer.father_name',
            'farmer.spouse_name',
            'adoption_table.adp_name',
            'question_table.question'
    )
    .leftJoin('dissemination_attendee_mapping','dissemination.dissemination_id', 'dissemination_attendee_mapping.dissemination_id')
    .leftJoin('farmer', 'farmer.farmer_id' , 'dissemination_attendee_mapping.farmer_id')
    .leftJoin('question_table','question_table.q_id' , 'dissemination_attendee_mapping.question_id')
    .leftJoin('adoption_table', 'adoption_table.adp_id' , 'dissemination_attendee_mapping.adoption_id')
    .where({ 'dissemination.dissemination_id': parseInt(req.params.id) })
    .then(function (rows) {
        next(null, rows);
    })
    .catch(function (err) {
        next(err);
    });
};

exports.deleteDisseminationById = (req, res, next) => {
    //Deletes particular Dissemination from database
};

exports.updateDisseminationById = (req, res, next) => {
    //updates particular Dissemination from database
};