const express = require('express');
const router = express.Router();
const farmerService = require("../services/farmerService");

router.get('/getFarmers', (req, res) => {
    farmerService.getFarmers(req, res, (err, data) => {
        if (err) {
            res.send('Error in Fetching farmers.', err);
        } else {
            res.send(data);
        }
    })
});

router.post('/saveFarmer', (req, res) => {
    farmerService.saveFarmer(req, res, (err, data) => {
        if (err) {
            res.send('Error in Saving Farmer.', err);
        } else {
            res.send(data);
        }
    })
});

router.get('/getFarmerById/:id', (req, res) => {
    farmerService.getFarmerById(req, res, (err, data) => {
        if (err) {
            res.send('Error in Fetching Farmer Details.', err);
        } else {
            res.send(data);
        }
    })
});


module.exports = router;