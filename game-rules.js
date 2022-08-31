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