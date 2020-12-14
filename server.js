var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});

require('./controllers/quizzes.controller.server')(app);
require('./controllers/question.controller.server')(app);
require('./controllers/quiz-attempts.controller.server')(app);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const quizzesService = require("./controllers/quizzes.controller.server");
quizzesService(app);

const questionsService = require("./controllers/question.controller.server");
questionsService(app);


app.listen(3000);


console.log("How may I serve you?");