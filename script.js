function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

let BUTTON = document.querySelectorAll(".button-1, .button-2, .button-3");

[].forEach.call(BUTTON, function (btn) {
  btn.addEventListener("click", function (event) {
    console.log("veikia?");
  });
});

