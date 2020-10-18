const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.classList.add("container");

const newDiv2 = document.createElement("div");
newDiv.appendChild(newDiv2);
newDiv2.classList.add("flex-center","flex-column");
newDiv2.setAttribute("id","home");

const newH1 = document.createElement("h1");
newDiv2.appendChild(newH1);
newH1.innerText="Quick Quiz";

const newATag = document.createElement("a");
newDiv2.appendChild(newATag);
newATag.classList.add("btn");
newATag.setAttribute("href","game.html");
newATag.innerText="Play";

const newATag2 = document.createElement("a");
newDiv2.appendChild(newATag2);
newATag2.classList.add("btn");
newATag2.setAttribute("href","highscores.html");
newATag2.innerText="High Scores";
