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
