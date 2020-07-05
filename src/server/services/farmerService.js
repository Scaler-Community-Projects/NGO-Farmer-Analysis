var knex = require('../utilities/createKnexPGConnection');
const config = require('../config');

exports.saveFarmer = (req, res, next) => {
    req.body.created_date = new Date();
    knex.transaction(function (trx) {
        knex.withSchema(config.pgConfig.schema)
            .table('farmer')
            .insert(req.body)
            .returning('*')
            .transacting(trx)
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function (rows) {
            next(null, rows);
        })
        .catch(function (err) {
            next(err);
        });
}

exports.getFarmers = (req, res, next) => {
    knex.withSchema(config.pgConfig.schema)
        .table('farmer')
        .select("*")
        .then(function (rows) {
            next(null, rows)
        })
        .catch(function (err) {
            next(err)
        });
}

exports.getFarmerById = (req, res, next) => {
    knex.withSchema(config.pgConfig.schema)
        .table('farmer')
        .select("*")
        .where({ "farmer_id": parseInt(req.params.id) })
        .then(function (row) {
            next(null, row)
        })
        .catch(function (err) {
            next(err)
        });
}