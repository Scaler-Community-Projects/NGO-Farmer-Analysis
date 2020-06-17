const express = require('express');
const router = express.Router();
const testService = require('../services/testService');


router.get('/testRoute', (req, res) => {
    // Implement authentication of user.
    testService.connectToDb(req, res, (err, data) => {
        if (err) {
            res.send('Error in Querying Database', err);
        } else {
            res.send(data);
        }
    })
});

module.exports = router;