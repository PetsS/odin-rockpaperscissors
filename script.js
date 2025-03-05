console.log("Rock Paper Scissors Game");

let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);

function getComputerChoice() {
  let choice = "";

  switch (randomNumber) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      choice = "no number";
      break;
  }

  return choice;
}

console.log(`Computer's choice is: ${getComputerChoice()}`);
