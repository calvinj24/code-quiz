var pageContent = document.querySelector(".page-content");
// Question Array
var questions = [
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question 2?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"},
    {q: "This is a question?", c: ["choice1", "choice2", "choice3", "choice4"], a:"1"}
];
var startEl = document.querySelector("#start");
var questionEl = document.createElement("h2");
var questionNumber = 0;
var currentQuestion = "";
var answer = "";
var choiceContainer = "";
var score = 0;




var startQuiz = function() {
    pageContent.innerHTML="";

    questionEl.classList="question";
    pageContent.appendChild(questionEl);
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
    pageContent.appendChild(choiceContainer);

    for (i=0; i<choiceList.length; i++) {
        newChoice(i);
    };
};

var newChoice = function (choiceNumber) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = (choiceNumber+1) + ". " + currentQuestion.c[choiceNumber];
    choiceEl.className = "choice";
    choiceEl.id="choice" + (choiceNumber + 1);
    choiceContainer.appendChild(choiceEl);
    choiceEl.addEventListener("click",pickChoice);
}

var pickChoice = function() {
    pickedChoice = event.target;
    pickedChoiceID = pickedChoice.id

    if (pickedChoiceID[pickedChoiceID.length-1] === answer) {
        console.log("Right");
        score = score + 1;

    } else {
        console.log("Wrong");
    };
    
    questionNumber = questionNumber+1;
    newQuestion(questionNumber);
};

if(startEl) {
    startEl.addEventListener("click",startQuiz);
}

