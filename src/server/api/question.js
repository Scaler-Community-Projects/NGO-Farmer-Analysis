const express = require("express");
const router = express.Router();
const questionService = require("../services/questionService");

router.get("/questions", (req, res) => {
    questionService.getAllQuestions(req, res, (err, data) => {
        if (err) {
            res.send("Error in Fetching questions.", err);
        } else {
            res.send(data);
        }
    });
});

router.post("/question", (req, res) => {
    questionService.saveQuestion(req, res, (err, data) => {
        if (err) {
            res.send("Error in Saving Question.", err);
        } else {
            res.send(data);
        }
    });
});

router.get("/question/:id", (req, res) => {
    questionService.getQuestionById(req, res, (err, data) => {
        if (err) {
            res.send("Error in Fetching the specific question.", err);
        } else {
            res.send(data);
        }
    });
});

router.delete("/question/:id", (req, res) => {
    questionService.deleteQuestionById(req, res, (err, data) => {
        if (err) {
            res.send("Error in Deleting the question", err);
        } else {
            res.send(data);
        }
    });
});

router.put("/question/:id", (req, res) => {
    questionService.updateQuestionById(req, res, (err, data) => {
        if (err) {
            res.send("Error in updating the question.", err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;