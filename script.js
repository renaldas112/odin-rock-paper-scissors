// start game

const main = document.getElementById("main");

const startNewGame = (document.querySelector(".start-game").onclick =
  function () {
    const mainContainer = document.querySelector(".main__container");
    mainContainer.classList.remove("justify-content-center");
    const mainSection = document.querySelector(".main__section");
    mainSection.classList.remove("d-none");
    const scoreboardContainer = document.querySelector(".scoreboard__container");
    scoreboardContainer.classList.remove("d-none");
    const mainSubText = document.querySelector(".main__subtext");
    mainSubText.classList.remove("d-none");
    const playerContainer = document.querySelector(".player");
    playerContainer.classList.remove("d-none");
    const computerContainer = document.querySelector(".computer");
    computerContainer.classList.remove("d-none");
    START_BUTTON = document.querySelector(".start-game");
    START_BUTTON.classList.add("d-none");
  });

//next round button

const nextRoundButtonDiv = document.querySelector(".next-round-div");
const NEXT_ROUND = document.createElement("div");
NEXT_ROUND.classList.add("next-round-button", "background-img");
NEXT_ROUND.innerText = "Next Round";
nextRoundButtonDiv.append(NEXT_ROUND);

//next round button hidden in start menu (default)

const newGameButtonUnhide = () => {
  nextRoundButtonDiv.classList.remove("d-none");
};

//next round button hides after new round starts

const newGameButtonHide = () => {
  nextRoundButtonDiv.classList.add("d-none");
};

// disables buttons after one choice selected

const disableButtonAfterClicked = () => {
  const BUTTONS = document.getElementsByTagName("button");
  for (const BUTTON of BUTTONS) {
    BUTTON.disabled = true;
  }
};

//next round button enables rock paper scissors buttons

const enableButtonAfterClicked = () => {
  const BUTTONS = document.getElementsByTagName("button");
  for (const BUTTON of BUTTONS) {
    BUTTON.disabled = false;
  }
};

//next round button functions

NEXT_ROUND.onclick = function () {
  enableButtonAfterClicked();
  resetPlayerAnswer();
  resetComputerChoice();
  resetAnswer();
  newGameButtonHide();
};

//is it tie or win/lose

const gameText = document.getElementById("game-answer");

const printAnswer = () => {
  gameText.innerText = result;
};

const resetAnswer = () => {
  gameText.innerText = "";
};
