const express = require("express");
const router = express.Router();

const disseminationService = require("../services/disseminationService");

router.get("/disseminations", (req, res) => {
    disseminationService.getAllDisseminations(req, res, (err, data) => {
        if (err) {
            res.send("Error in Fetching disseminations", err);
        } else {
            res.send(data);
        }
    });
});

router.post("/dissemination", (req, res) => {
    disseminationService.saveDissemination(req, res, (err, data) => {
        if (err) {
            res.send("Error in Saving dissemination details.", err);
        } else {
            res.send(data);
        }
    });
});

router.get("/dissemination/:id", (req, res) => {
    disseminationService.getDisseminationById(req, res, (err, data) => {
        if (err) {
            res.send("Error in Fetching the specific dissemination. ", err);
        } else {
            res.send(data);
        }
    });
});

router.delete("/dissemination/:id", (req, res) => {
    disseminationService.deleteDisseminationById(req, res, (err, data) => {
        if (err) {
            res.send("Error in Deleting Disseminationd details.", err);
        } else {
            res.send(data);
        }
    });
});

router.put("/dissemination/:id", (req, res) => {
    disseminationService.updateDisseminationById(req, res, (err, data) => {
        if (err) {
            res.send("Error in updating Dissemination  Details.", err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;