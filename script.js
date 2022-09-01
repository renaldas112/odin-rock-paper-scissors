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
