var quizContent = document.querySelector(".quiz-content");
var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var responseEl = document.querySelector("#response");
var highScoreEl = document.querySelector(".high-score-link")

// Question Array
var questions = [
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question 2?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"}
];
// Variables
var questionEl = document.createElement("h2");
var questionNumber = 0;
var currentQuestion = "";
var answer = "";
var choiceContainer = "";
var score = 0;
var time = 60;
var scores = [];
var scoreID = 0;
var timerON = 0;

var startQuiz = function() {
    quizContent.innerHTML="";

    //add timer
    timerON = 1;
    setInterval(timer,1000);

    //first question
    questionEl.classList="question";
    quizContent.appendChild(questionEl);
    newQuestion(questionNumber);
};

var newQuestion = function(questionNumber) {
    choiceContainer.innerHTML="";
    currentQuestion=questions[questionNumber];
    answer=currentQuestion.a;
    var choiceList = currentQuestion.c;
    
    // mew question
    questionEl.textContent=currentQuestion.q;

    // new choices
    choiceContainer = document.createElement("div");
    choiceContainer.className = "choice-container";
    quizContent.appendChild(choiceContainer);

    for (i=0; i<choiceList.length; i++) {
        newChoice(i);
    };
};

var newChoice = function (choiceNumber) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = (choiceNumber+1) + ". " + currentQuestion.c[choiceNumber];
    choiceEl.className = "button";
    choiceEl.id="choice" + (choiceNumber + 1);
    choiceContainer.appendChild(choiceEl);
    choiceEl.addEventListener("click",pickChoice);
}

var pickChoice = function() {
    pickedChoice = event.target;
    pickedChoiceID = pickedChoice.id

    if (pickedChoiceID[pickedChoiceID.length-1] === answer) {
        displayResponse(1);
        score = score + 1;

    } else {
        displayResponse();
        time = time - 15;
    };
    
    if (questionNumber === (questions.length - 1)) {
        endQuiz();
    } else {
        questionNumber = questionNumber+1;
        newQuestion(questionNumber);
    }
};

var displayResponse = function(right){
    if (right) {
        responseEl.textContent="Correct!";
    } else {
        responseEl.textContent="Wrong!";
    }
};

var timer = function() {
    if (!timerON) {
        return;
    };
    if (time < 1) {
        endQuiz();
    } else {
        time = time-1;
        timerEl.textContent = time + "s";
    };
};

var endQuiz = function() {
    quizContent.innerHTML="";
    responseEl.textContent="";
    timerON = "";
    timerEl.textContent="";

    var finishEl = document.createElement("h2");
    finishEl.textContent = "All Done";
    quizContent.appendChild(finishEl);

    var scoreEl = document.createElement("p");
    scoreEl.textContent = "Score: " + score;
    quizContent.appendChild(scoreEl);

    var nameEl = document.createElement("form");
    nameEl.innerHTML = "<input type='text' name='name' placeholder='Enter Name' />"
    quizContent.appendChild(nameEl);

    nameEl.addEventListener("submit", saveScore);
}

var saveScore = function(event) {
    event.preventDefault();
    var name = document.querySelector("input[name='name']").value;
    localStorage.setItem("name", name);
    localStorage.setItem("score", score);
}

var viewScores = function() {
    quizContent.innerHTML="";
    var highScoreHeaderEl = document.createElement("h3");
    highScoreHeaderEl.textContent = "High Scores";
    quizContent.appendChild(highScoreHeaderEl);

    var getScoreEl = document.createElement("p");
    var getNameEl = document.createElement("p");

    getNameEl.textContent = "Name: " + localStorage.getItem("name");
    getScoreEl.textContent = "Score: " + localStorage.getItem("score");

    quizContent.appendChild(getNameEl);
    quizContent.appendChild(getScoreEl);
}

if(startEl) {
    startEl.addEventListener("click",startQuiz);
}

highScoreEl.addEventListener("click",viewScores);




