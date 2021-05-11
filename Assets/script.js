let timer = document.getElementById("Timer");
let start = document.getElementById("start");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let question = document.getElementById("question");
let timerStart = 75;
let currentQuestionIndex = -1;


let questions = [
    {
        title: "What does the Javascript do to an HTML webpage?",
        choices: ["Makes the webpage interactive.", "Adds style to a webpage", "Makes the webpage hidden", "Adds coffee to a webpage"],
        answer: "Makes the webpage interactive"
    },

    {
        title: "What is a function in Javascript?",
        choices: ["It is a way to add color to a webpage.", "It tells you the bugs in code.", "It is code designed to perform a specific task.", "It is a seperate webpage."],
        answer: "It is code designed to perform a specific task."
    },

    {
        title: "What do you commonly name a javacript file?",
        choices: ["script.js", "index.html", "coffee.js", "style.css"],
        answer: "script.js"
    },


    {
        title: "What is an array in javascript?",
        choices: ["It is a multiplication problem.", "It is a light of sunshine", "It is a type of laser", "It is a list of items in a set order."],
        answer: "It is a list of items in a set order."
    },

    {
        title: "What is the difference between == and ===?",
        choices: ["There is an extra = symbol", "== means they are somewhat close to being the same and === means they are exactly the same.", "They are not different", "What are you talking about?"],
        answer: "== means they are close to being the same and === means they are exactly the same."
    },



];
//timer function
function setTime() {
    let timerLeft = setInterval(function () {
        timerStart--;
        timer.textContent = timerStart + " seconds remaining in the quiz.";

        if (timerStart <= 0) {
            clearInterval(timerLeft);
            sendMessage();
        }
    }, 1000);
}


//start button and hides after click
start.addEventListener("click", function (event) {
    start.setAttribute("style", "display:none")
    answer1.setAttribute("style", "display:block")
    answer2.setAttribute("style", "display:block")
    answer3.setAttribute("style", "display:block")
    answer4.setAttribute("style", "display:block")
    question.setAttribute("style", "display:block")
    setTime()
    changeQuestion1(event)
});


answer1.addEventListener("click", function (event) {answerComparison(event); changeQuestion1()});
function changeQuestion1() {

    currentQuestionIndex = currentQuestionIndex + 1;
    document.getElementById("answer1").innerHTML = questions[currentQuestionIndex].choices[0];
    document.getElementById("answer2").innerHTML = questions[currentQuestionIndex].choices[1];
    document.getElementById("answer3").innerHTML = questions[currentQuestionIndex].choices[2];
    document.getElementById("answer4").innerHTML = questions[currentQuestionIndex].choices[3];
    document.getElementById("question").innerHTML = questions[currentQuestionIndex].title;
    

};
answer2.addEventListener("click", function (event) {answerComparison(event); changeQuestion1()});

answer3.addEventListener("click", function (event) {answerComparison(event); changeQuestion1()});

answer4.addEventListener("click", function (event) {answerComparison(event); changeQuestion1()});

function answerComparison(event) {
   
    if (event.target.textContent === "start") {
        return;

    }

    else if (event.target.textContent === questions[currentQuestionIndex].answer) {
        console.log("correct")

    }
    else {
        timerStart -= 15;
        if (timerStart < 0) {
            timerStart = 0;

        }

    }
}