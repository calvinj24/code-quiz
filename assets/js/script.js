// Question Array
var questions = [
    {q:"This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:1},
    {q:"This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:1},
    {q:"This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:1},
    {q:"This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:1},
    {q:"This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:1}
];
var questionEl = document.querySelector("#question");
var choiceListEl = document.querySelector("#choice-list");
var questionNumber = 0;

var newQuestion = function() {
    var currentQuestion=questions[questionNumber];
    
    // mew question
    questionEl.textContent=currentQuestion.q;

    // new choices
    for (i=0; i<currentQuestion.c.length; i++) {
        var choiceEl = document.createElement("li");
        choiceEl.className = "choice";
        choiceEl.textContent = currentQuestion.c[i];
        choiceListEl.appendChild(choiceEl);
    }
}

newQuestion()