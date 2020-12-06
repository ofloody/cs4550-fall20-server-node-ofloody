const service = require("../services/questions-service");

module.exports = (app) => {

    const findAllQuestions = (req, res) =>
        res.json(service.findAllQuestions());

    const findAllQuestionsForQuiz = (req, res) => {
        const questions = service.findAllQuestionsForQuiz(req.params['qid']);
        res.json(questions);
    };

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findAllQuestionsForQuiz);
};