var knex = require('../utilities/createKnexPGConnection');
const config = require('../config');

exports.getAllDisseminations = (req, res, next) => {
    //returns all the Disseminations
};

exports.saveDissemination = (req, res, next) => {
    req.body.created_date = new Date();
    knex.transaction(function (trx) {
        knex.withSchema(config.pgConfig.schema)
            .table('dissemination')
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
};

exports.getDisseminationById = (req, res, next) => {
    //Gets particular Dissemination from database
};

exports.deleteDisseminationById = (req, res, next) => {
    //Deletes particular Dissemination from database
};

exports.updateDisseminationById = (req, res, next) => {
    //updates particular Dissemination from database
};