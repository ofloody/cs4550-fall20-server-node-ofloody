
let questions = require("./questions.json");

const findAllQuestions = () =>
    questions;

const findAllQuestionsForQuiz = (qid) => {
    return questions.filter(question => question.quizId === qid);
};

module.exports = {
    findAllQuestions, findAllQuestionsForQuiz: findAllQuestionsForQuiz
};