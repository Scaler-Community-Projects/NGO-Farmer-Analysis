var config = require('../config');
var knex = require('knex')({
    client: 'pg',
    connection: {
        host: config.pgConfig.host,
        user: config.pgConfig.user,
        password: config.pgConfig.password,
        database: config.pgConfig.database,
        ssl: config.pgConfig.ssl
    }
});

module.exports = knex;