
const newDiv7 = document.createElement("div");
document.body.appendChild(newDiv7);
newDiv7.classList.add("container");

const newDiv8 = document.createElement("div");
newDiv7.appendChild(newDiv8);
newDiv8.classList.add("justify-center","flex-column");
newDiv8.setAttribute("id","game");


const newDiv9 = document.createElement("div");
newDiv8.appendChild(newDiv9);
newDiv9.setAttribute("id","hud");


const subdiv1 = document.createElement("div"); 
newDiv9.appendChild(subdiv1);
subdiv1.setAttribute("id","hud-item");

const subptag1 = document.createElement("p"); 
subdiv1.appendChild(subptag1);
subptag1.setAttribute("id","progressText");
subptag1.classList.add("hud-prefix");
subptag1.innerText="Question";

const progbar = document.createElement("div");
subdiv1.appendChild(progbar);
progbar.setAttribute("id","progressBar");

const prochild = document.createElement("div");
progbar.appendChild(prochild);
prochild.setAttribute("id","progressBarFull")

const subdiv2 = document.createElement("div"); 
newDiv9.appendChild(subdiv2);
subdiv2.setAttribute("id","hud-item");

const subptag2 = document.createElement("p"); 
subdiv2.appendChild(subptag2);
subptag2.classList.add("hud-prefix");
subptag2.innerText="Score";

const h1Child = document.createElement("h1");
subdiv2.appendChild(h1Child);
h1Child.setAttribute("id","score");
h1Child.classList.add("hud-main-text");
h1Child.innerText="0";


const h2Tag = document.createElement("h2");
newDiv8.appendChild(h2Tag);
h2Tag.setAttribute("id","question");
h2Tag.innerText="What is the answer to this questions?";

const choice1 = document.createElement("div");
newDiv8.appendChild(choice1);
choice1.classList.add("choice-container");
const ptag1 = document.createElement("p");
choice1.appendChild(ptag1);
ptag1.classList.add("choice-prefix");
ptag1.innerText="A";
const ptag2 = document.createElement("p");
choice1.appendChild(ptag2);
ptag2.classList.add("choice-text");
ptag2.setAttribute("data-number","1");
ptag2.innerText="Choice 1";

const choice2 = document.createElement("div");
newDiv8.appendChild(choice2);
choice2.classList.add("choice-container");
const ptag3 = document.createElement("p");
choice2.appendChild(ptag3);
ptag3.classList.add("choice-prefix");
ptag3.innerText="B";
const ptag4 = document.createElement("p");
choice2.appendChild(ptag4);
ptag4.classList.add("choice-text");
ptag4.setAttribute("data-number","2");
ptag4.innerText="Choice 2";

const choice3 = document.createElement("div");
newDiv8.appendChild(choice3);
choice3.classList.add("choice-container");
const ptag5 = document.createElement("p");
choice3.appendChild(ptag5);
ptag5.classList.add("choice-prefix");
ptag5.innerText="C";
const ptag6 = document.createElement("p");
choice3.appendChild(ptag6);
ptag6.classList.add("choice-text");
ptag6.setAttribute("data-number","3");
ptag6.innerText="Choice 3";

const choice4 = document.createElement("div");
newDiv8.appendChild(choice4);
choice4.classList.add("choice-container");
const ptag7 = document.createElement("p");
choice4.appendChild(ptag7);
ptag7.classList.add("choice-prefix");
ptag7.innerText="D";
const ptag8 = document.createElement("p");
choice4.appendChild(ptag8);
ptag8.classList.add("choice-text");
ptag8.setAttribute("data-number","4");
ptag8.innerText="Choice 4";


const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch(
    'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        console.log(loadedQuestions.results);
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};


