var knex = require('../utilities/createKnexPGConnection');
const config = require('../config');

exports.getAllAdoption = (req, res, next) => {};

exports.saveAdoptionDetails = (req, res, next) => {};

exports.getAdoptionById = (req, res, next) => {
    knex.withSchema(config.pgConfig.schema)
        .table('adoption_table')
        .select("*")
        .where({ "adp_id": parseInt(req.params.id) })
        .then(function (row) {
            next(null, row)
        })
        .catch(function (err) {
            next(err)
        });
};

exports.deleteFarmerById = (req, res, next) => {};

exports.updateFarmerById = (req, res, next) => {};
