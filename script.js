var startButton = document.querySelector('.start');
var quiz = document.querySelector('.quiz');
var rules = document.querySelector('.rules');
var answer = document.getElementById('answer');
var question = document.querySelector('#question');
var choices = document.getElementById('choices');


// Set current question deafulat to -1 so startQuiz function queue up question 0 in the array.
var currentQuestion = -1;
var currentQuestionDetail;


var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["Numbers & Strings", "Arrays", "Booleans", "All of the above"],
        answer: "Booleans"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["Commas", "Curley Brackets", "Quotes", "Parantheses"],
        answer: "Curley Brackets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/GitBash", "For Loops", "Console.log"],
        answer: "console.log"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        choices: ["Quotes", "Curley Brackets", "Square Brackets", "Parantheses"],
        answer: "Parantheses"
    },
];


startButton.addEventListener('click', startQuiz);

// When selecting an answer, verifyAnswer will verify if it's the correct
// answer before moving on to the next question.
choices.addEventListener('click', verifyAnswer);

function startQuiz(){
    // Will hide the rules content. 
    rules.style.display = 'none';

    // Empty the choices container 
    clearChoices();

   
    currentQuestion++;

    // if currentQuestion is equal to the length of questions then the quiz is over
    if (currentQuestion == question.length) {
        return endQuiz();
    }

    currentQuestionDetail = questions[currentQuestion];

    question.innerHTML = currentQuestionDetail.question;
    // Loop through the choices array in the questions object
    for (var i = 0; i < currentQuestionDetail.choices.length; i++) {
        
        var newChoice = document.createElement('div');
        newChoice.setAttribute('class', 'choice');
      
        var newButton = document.createElement('button');
        newButton.setAttribute('class', 'btn btn-secondary');
        newButton.innerHTML = currentQuestionDetail.choices[i];
       
        newChoice.appendChild(newButton);
        choices.appendChild(newChoice);
    }
    quiz.style.display = "block";
}


function verifyAnswer(e) {
    
    var target = e.target;

    
    if (target.matches('button')) {
        
        if (target.textContent == currentQuestionDetail.answer) {
            correctAnswer(target);
        } else {
            wrongAnswer(target);
        }
    }
}

// This function handles a correct answer
function correctAnswer(target) {
  
    disableChoices();

    // Highlights the button green if correct
    target.classList.add('btn-success');
    nextQuestion();
}

// This function handles an wrong answer
function wrongAnswer(target) {
    
    disableChoices();

    // Highlights the button red if correct
    target.classList.add('btn-danger');
    nextQuestion();
}

function disableChoices() {
    for (var i = 0; i < choices.children.length; i++) {
        choices.children[i].children[0].setAttribute('disabled', '');
    }
}

//calls the startQuiz function after .8 seconds to show the correct/incorrect answer
function nextQuestion() {
    setTimeout(function () {
        startQuiz();
    }, 800);
}


function clearChoices() {
    choices.innerHTML = "";
}

function endQuiz(){
    quiz.style.display = 'none';
}