console.log("Rock Paper Scissors Game");

// global variables to track score
let humanScore = 0;
let computerScore = 0;

// Human's Choice
function getHumanChoice() {
  let choice = "";
  let number = parseInt(
    prompt(
      "What is your choice? Enter a number between 1 and 3 (1 - rock, 2 - paper, 3 - scissors)"
    )
  );

  switch (number) {
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
      choice = "not a valid number";
      break;
  }

  return choice;
}

// Computer's Choice
function getComputerChoice() {
  let choice = "";

  // Generate a random number
  let randomNumber = Math.floor(Math.random() * 3) + 1;

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
      choice = "error";
      break;
  }

  return choice;
}



// Final display in console
console.log(`Your choice is: ${getHumanChoice()}`);
console.log(`Computer's choice is: ${getComputerChoice()}`);
