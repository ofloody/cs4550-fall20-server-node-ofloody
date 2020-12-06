const service = require("../services/quizzes-service");
module.exports = function quizzesService(app) {
    const findAllQuizzes = (req, res) =>
        res.json(service.findAllQuizzes());

    const findQuizById = (req, res) =>
        res.json(service.findQuizById(req.params['qid']));

    const deleteQuiz = (req, res) =>
        res.send(service.deleteQuizById(req.params['qid']));

    const createQuiz = (req, res) =>
        res.send(service.createQuiz());

    app.get('/api/quizzes', findAllQuizzes);
    app.get('/api/quizzes/:qid', findQuizById);
    app.delete('/api/quizzes/:qid', deleteQuiz);
};