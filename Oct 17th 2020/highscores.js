
const newDiv3 = document.createElement("div");
document.body.appendChild(newDiv3);
newDiv3.classList.add("container");

const newDiv4 = document.createElement("div");
newDiv3.appendChild(newDiv4);
newDiv4.classList.add("flex-center","flex-column");
newDiv4.setAttribute("id","highScores");

const h1Tag = document.createElement("h1");
newDiv4.appendChild(h1Tag);
h1Tag.innerText="High Scores";

const ulTag = document.createElement("ul");
newDiv4.appendChild(ulTag);
ulTag.setAttribute("id","highScoresList")

const newATag3 = document.createElement("a");
newDiv4.appendChild(newATag3);
newATag3.classList.add("btn");
newATag3.setAttribute("href","index.html");
newATag3.innerText="Go Home";

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
  