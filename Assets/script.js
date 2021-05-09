let timer = document.getElementById("Timer");
let start = document.getElementById("start");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let question = document.getElementById("question");
let timerStart = 75;
let currentQuestionIndex = 0;
let currentAnswerIndex = 0;


//timer function
function setTime() {
    let timerLeft = setInterval(function () {
        timerStart--;
        timer.textContent = timerStart + " seconds remaining in the quiz.";

        if (timerStart === 0) {
            clearInterval(timerLeft);
            sendMessage();
        }
    }, 1000);
}


//start button and hides after click
start.addEventListener("click", function () {
    start.setAttribute("style", "display:none")
    answer1.setAttribute("style", "display:block")
    answer2.setAttribute("style", "display:block")
    answer3.setAttribute("style", "display:block")
    answer4.setAttribute("style", "display:block")
    setTime()
    getQuestion()
});

//adds question and choices after start clicked
function getQuestion() {

    let currentQuestion = questions[currentQuestionIndex];
    question.textContent = currentQuestion.title;

    let currentChoices = questions[currentAnswerIndex];
    answer1.textContent = currentChoices.choices[0];
    answer2.textContent = currentChoices.choices[1];
    answer3.textContent = currentChoices.choices[2];
    answer4.textContent = currentChoices.choices[3];

    button.addEventListener("click", function () {
        currentQuestionIndex++;
        currentChoicesIndex++;

    

    })
};

