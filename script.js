const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// computer choice
const getComputerChoice = () => {
  const computerChoice = ["Rock", "Paper", "Scissors"];

  const random = Math.floor(Math.random() * computerChoice.length);
  console.log(random, computerChoice[random]);
};

const computerSelection = getComputerChoice();



// function playRound(playerSelection, computerSelection) {
//   // your code here!
// }
// console.log(playRound(playerSelection, computerSelection));
