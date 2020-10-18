const newDiv5 = document.createElement("div");
document.body.appendChild(newDiv5);
newDiv5.classList.add("container");

const newDiv6 = document.createElement("div");
newDiv5.appendChild(newDiv6);
newDiv6.classList.add("flex-center","flex-column");
newDiv6.setAttribute("id","end");

const finalh1Tag = document.createElement("h1");
newDiv6.appendChild(finalh1Tag);
finalh1Tag.setAttribute("id","finalScore");

const formTag = document.createElement("form");
newDiv6.appendChild(formTag);

const inputTag = document.createElement("input");
formTag.appendChild(inputTag);
inputTag.setAttribute("type","text");
inputTag.setAttribute("name","username");
inputTag.setAttribute("id","username");
inputTag.setAttribute("placeholder","username");

const buttonTag = document.createElement("input");
formTag.appendChild(buttonTag);
buttonTag.setAttribute("type","submit");
buttonTag.classList.add("btn");
buttonTag.setAttribute("id","saveScoreBtn");
buttonTag.setAttribute("onclick","saveHighScore(event)");
buttonTag.setAttribute("disabled","Save");
buttonTag.setAttribute("value","Save");

const newATag4 = document.createElement("a");
newDiv6.appendChild(newATag4);
newATag4.classList.add("btn");
newATag4.setAttribute("href","game.html");
newATag4.innerText="Play Again";

const newATag5 = document.createElement("a");
newDiv6.appendChild(newATag5);
newATag5.classList.add("btn");
newATag5.setAttribute("href","index.html");
newATag5.innerText="Go Home";

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};

