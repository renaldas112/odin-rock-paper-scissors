//////////////////////////////////////////////////
// computer choices

let computerAnswer = "";

const getComputerChoice = () => {
  const computerChoices = ["Rock", "Paper", "Scissors"];

  const random = Math.floor(Math.random() * computerChoices.length);
  const computerAnswerText = document.getElementById("computer-answer");
  computerAnswerText.innerText = computerChoices[random];

  computerAnswer = computerChoices[random];
};

const resetComputerChoice = () => {
  const computerAnswerText = document.getElementById("computer-answer");
  computerAnswerText.innerText = "";
}