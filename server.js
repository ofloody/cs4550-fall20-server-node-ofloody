var express = require('express')
var app = express()

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

const quizSchema = mongoose.Schema({
    name: String,
    avg: Number
}, {collection: "quizzes"});

const quizModel = mongoose.model("QuizModel", quizSchema);



const quizzesService = require("./controllers/quizzes.controller.server");
quizzesService(app);

const questionsService = require("./controllers/question.controller.server");
questionsService(app);


app.listen(3000);



app.get('/hello', (req, res) =>
    res.send('Hello World'));

app.get('/add/:a/:b', (req, res) =>
{
    const a = parseInt(req.params['a']);
    const b = parseInt(req.params['b']);
    const c = a + b;
    res.send()
});


console.log("How may I serve you?");