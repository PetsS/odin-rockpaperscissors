console.log("Rock Paper Scissors Game");

// global variables to track score
let humanScore = 0;
let computerScore = 0;

// variables for choices
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
    } else if (computerChoice === "paper") {
      computerScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
    } else if (computerChoice === "scissors") {
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
    } else if (computerChoice === "rock") {
      computerScore++;
    }
  }
}

// Final display in console
playRound(humanSelection, computerSelection);

// console.log(`Your choice is: ${getHumanChoice()}`);
// console.log(`Computer's choice is: ${getComputerChoice()}`);
