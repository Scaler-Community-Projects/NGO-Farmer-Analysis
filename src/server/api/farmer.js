const express = require('express');
const router = express.Router();
const farmerService = require("../services/farmerService");

router.get('/getFarmers', (req, res) => {
    res.send("return farmers");
});

router.get('/getFarmerById/:id', (req, res) => {
    res.send("return specific farmer details");
});

router.post('/saveFarmerDetails', (req, res) => {
    res.send("return farmers");
});

module.exports = router;