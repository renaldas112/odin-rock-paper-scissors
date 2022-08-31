// start game
const startNewGame = (document.querySelector(".start-game").onclick = function () {
  const mainSubText = document.querySelector(".main__subtext");
  mainSubText.classList.remove("d-none");
  const mainContainer = document.querySelector(".main__container");
  mainContainer.classList.remove("d-none");
  const playerContainer = document.querySelector(".player");
  playerContainer.classList.remove("d-none");
  const computerContainer = document.querySelector(".computer");
  computerContainer.classList.remove("d-none");
  START_BUTTON = document.querySelector(".start-game");
  START_BUTTON.classList.add("d-none");
});

//new game button

const newGameButtonDiv = document.querySelector(".new-game-div");
const NEW_GAME = document.createElement("div");
NEW_GAME.classList.add("new-game-button");
NEW_GAME.innerText = "New Game";
newGameButtonDiv.append(NEW_GAME);

//new game button hidden in start menu (default)

const newGameButtonUnhide = () => {
  newGameButtonDiv.classList.remove("d-none");
}

//new game button hides after new round starts

const newGameButtonHide = () => {
  newGameButtonDiv.classList.add("d-none");
}

// disables buttons after clicked

const disableButtonAfterClicked = () => {
  const BUTTONS = document.getElementsByTagName("button");
  for (const BUTTON of BUTTONS) {
    BUTTON.disabled = true;
  }
};

//new game button enables rock paper scissors buttons

const enableButtonAfterClicked = () => {
  const BUTTONS = document.getElementsByTagName("button");
  for (const BUTTON of BUTTONS) {
    BUTTON.disabled = false;
  }
};

//new game button functions

NEW_GAME.onclick = function () {
  enableButtonAfterClicked();
  resetPlayerAnswer();
  resetComputerChoice();
  resetAnswer();
  newGameButtonHide();
};

//score

const printAnswer = () => {
  const scoreText = document.getElementById("score-answer");
  scoreText.innerText = result;
};

const resetAnswer = () => {
  const scoreText = document.getElementById("score-answer");
  scoreText.innerText = "";
}
