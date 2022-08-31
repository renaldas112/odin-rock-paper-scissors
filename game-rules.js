/////////////////////////////////////////////////////
// game rules

let result = "";

//player scoreboard

let playerScore = 0;

//computer score

let computerScore = 0;

const gameRules = () => {
  if (
    (playerSelection === "Rock" && computerAnswer === "Paper") ||
    (playerSelection === "Paper" && computerAnswer === "Scissors") ||
    (playerSelection === "Scissors" && computerAnswer === "Rock")
  ) {
    result = "Round Lost";

    computerScore++;

    const computerScoreboard = document.querySelector(".computer-score");
    computerScoreboard.innerText = computerScore;
  } else if (
    (playerSelection === "Rock" && computerAnswer === "Scissors") ||
    (playerSelection === "Paper" && computerAnswer === "Rock") ||
    (playerSelection === "Scissors" && computerAnswer === "Paper")
  ) {
    result = "Round Won";

    playerScore++;

    const playerScoreboard = document.querySelector(".player-score");
    playerScoreboard.innerText = playerScore;
  } else {
    result = "Tie";
  }
};

const gameOver = () => {
  if (playerScore === 1) {
    displayVictoryScreen(playerScore, computerScore);
  } else if (computerScore === 1) {
    displayDefeatScreen(playerScore, computerScore);
  }
};

