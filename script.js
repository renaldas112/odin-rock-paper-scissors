//////////////////////////////////////////////////
// computer choices

let computerAnswer = "";

const getComputerChoice = () => {
  const computerChoices = ["Rock", "Paper", "Scissors"];

  const random = Math.floor(Math.random() * computerChoices.length);

  const computerAnswerText = document.querySelector(".computer");
  computerAnswerText.append(computerChoices[random]);

  computerAnswer = computerChoices[random];
};

// disables buttons after clicked
const disableButtonAfterClicked = () => {
  const BUTTONS = document.getElementsByTagName("button");
  for (const BUTTON of BUTTONS) {
    BUTTON.disabled = true;
  }
};

/////////////////////////////////////////////////////
// game rules

let result = "";

const gameRules = () => {
  if (
    (playerSelection === "Rock" && computerAnswer === "Paper") ||
    (playerSelection === "Paper" && computerAnswer === "Scissors") ||
    (playerSelection === "Scissors" && computerAnswer === "Rock")
  ) {
    result = "You lost";
  } else if (
    (playerSelection === "Rock" && computerAnswer === "Scissors") ||
    (playerSelection === "Paper" && computerAnswer === "Rock") ||
    (playerSelection === "Scissors" && computerAnswer === "Paper")
  ) {
    result = "You win";
  } else {
    result = "Tie";
  }
};

const printAnswer = () => {
  const verdict = document.querySelector(".verdict__container");
  verdict.append(result);
};

//////////////////////////////////////////////////
// player choice

let playerSelection = "";

const playerAnswer = document.getElementById("player-answer");

const ROCK_BUTTON = (document.querySelector(".rock").onclick = function () {
  playerAnswer.innerText = "Rock";
  playerSelection = "Rock";
  getComputerChoice();
  gameRules();
  printAnswer();
  disableButtonAfterClicked();
});
const PAPER_BUTTON = (document.querySelector(".paper").onclick = function () {
  playerAnswer.innerText = "Paper";
  playerSelection = "Paper";
  getComputerChoice();
  gameRules();
  printAnswer();
  disableButtonAfterClicked();
});
const SCISSORS_BUTTON = (document.querySelector(".scissors").onclick =
  function () {
    playerAnswer.innerText = "Scissors";
    playerSelection = "Scissors";
    getComputerChoice();
    gameRules();
    printAnswer();
    disableButtonAfterClicked();
  });

const newGameButtonDiv = document.querySelector(".new-game-div");
const NEW_GAME = document.createElement("div");
NEW_GAME.classList.add("new-game-button");
NEW_GAME.innerText = "New Game";
newGameButtonDiv.append(NEW_GAME);

// function playRound(playerSelection, computerSelection) {
//   // your code here!
// }
// console.log(playRound(playerSelection, computerSelection));
