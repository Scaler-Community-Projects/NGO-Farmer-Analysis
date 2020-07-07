const express = require("express");
const router = express.Router();

const adoptionService = require("../services/adoptionService");

router.get("/adoptionForm", (req, res) => {
  adoptionService.getAllAdoption(req, res, (err, data) => {
    if (err) {
      res.send("Error in Fetching Adoption Details.", err);
    } else {
      res.send(data);
    }
  });
});

router.post("/adoptionForm", (req, res) => {
  adoptionService.saveAdoptionDetails(req, res, (err, data) => {
    if (err) {
      res.send("Error in Saving Adoption Details.", err);
    } else {
      res.send(data);
    }
  });
});

router.get("/adoptionForm/:id", (req, res) => {
  adoptionService.getAdoptionById(req, res, (err, data) => {
    if (err) {
      res.send("Error in Fetching Adoption Detail of User. ", err);
    } else {
      res.send(data);
    }
  });
});

router.delete("/adoptionForm/:id", (req, res) => {
  adoptionService.deleteFarmerById(req, res, (err, data) => {
    if (err) {
      res.send("Error in Deleting Adoption Details..", err);
    } else {
      res.send(data);
    }
  });
});

router.put("/adoption/:id", (req, res) => {
  adoptionService.updateFarmerById(req, res, (err, data) => {
    if (err) {
      res.send("Error in Updating Adoption Details.", err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
