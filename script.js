var startButton = document.querySelector('.start');
var quiz = document.querySelector('.quiz');
var rules = document.querySelector('.rules');
var answer = document.getElementById('answer');
var question = document.querySelector('#question');
var question2 = document.querySelector('#question2');
var answerChoice = document.querySelector('.choice');
var timer;

startButton.addEventListener('click', function(){
    rules.style.display = 'none';
    startButton.style.display = 'none';
    quiz.style.display = 'block';
    quizTimer();

});

answerChoice.addEventListener('click', function(){
    question.style.display = 'none';
    question2.style.display = 'block';
    quizTimer();
    console.log(answerChoice.length);
});

function showHideQuiz(){
    quiz.style.display = 'none';
}

function quizTimer() {
    timer = setTimeout(function () {
        quiz.style.display = 'none';
        answer.innerHTML = "You did not answer";
    }, 120000);

}

showHideQuiz();