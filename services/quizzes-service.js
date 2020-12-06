
let quizzes = require("./quizzes.json");

const findAllQuizzes = () =>
    quizzes;
const findQuizById = (qid) =>
    quizzes.find(q => q._id === qid);

const deleteQuizById = (quid) =>
    quizzes = quizzes.filter(q => q._id !== quid);

const createQuiz = () => {
    const newQuiz = {_id: (new Date()).getTime() + "", title: "New Quiz"};
    quizzes.push(quiz);
    return newQuiz;
}

const updateQuiz = (qid) => {

}

module.exports = {
    findAllQuizzes: findAllQuizzes,
    findQuizById: findQuizById,
    deleteQuizById,
    createQuiz,
};