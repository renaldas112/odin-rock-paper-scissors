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
  newGameButtonUnhide();
  disableButtonAfterClicked();
});
const PAPER_BUTTON = (document.querySelector(".paper").onclick = function () {
  playerAnswer.innerText = "Paper";
  playerSelection = "Paper";
  getComputerChoice();
  gameRules();
  printAnswer();
  newGameButtonUnhide();
  disableButtonAfterClicked();
});
const SCISSORS_BUTTON = (document.querySelector(".scissors").onclick =
  function () {
    playerAnswer.innerText = "Scissors";
    playerSelection = "Scissors";
    getComputerChoice();
    gameRules();
    printAnswer();
    newGameButtonUnhide();
    disableButtonAfterClicked();
  });

  const resetPlayerAnswer = () => {
    const playerAnswer = document.getElementById("player-answer");
    playerAnswer.innerText = "";
  }