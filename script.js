// global variables to track score
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

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
  let whoScores = "";

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      whoScores = "You Score!";
    } else if (computerChoice === "paper") {
      computerScore++;
      whoScores = "Computer Scores!";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      whoScores = "You Score!";
    } else if (computerChoice === "scissors") {
      computerScore++;
      whoScores = "Computer Scores!";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      whoScores = "You Score!";
    } else if (computerChoice === "rock") {
      computerScore++;
      whoScores = "Computer Scores!";
    }
  }

  return whoScores;
}

function displayScore(
  humanSelection,
  computerSelection,
  humanScore,
  computerScore,
  roundCounter
) {
  console.log(`---------- Round: ${roundCounter} ----------\n\n`);
  console.log(`Your choice is: ${humanSelection}`);
  console.log(`Computer's choice is: ${computerSelection}`);
  console.table("-----------------------------");
  console.log(`Your score is: ${humanScore}`);
  console.log(`The Computer's score is: ${computerScore}`);
  console.table("");
}

function playGame() {
  console.log(
    "Rock Paper Scissors Game\n" +
      "The game will play over 5 rounds.\n" +
      "Rock beats Scissors, Scissors beats Paper, Paper beats Rock."
  );

  while (roundCounter < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    // increment the round by 1
    roundCounter++;

    playRound(humanSelection, computerSelection);

    displayScore(
      humanSelection,
      computerSelection,
      humanScore,
      computerScore,
      roundCounter
    );
  }

  console.log(`---------- Final Score: ----------\n\n`);
  console.log(
    `Final score is: ${humanScore} - ${computerScore}.`
  );
  if (humanScore > computerScore) {
    console.log(
      `Congratulations, You Win!`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Computer wins!`
    );
  } else {
    console.log("It is a tie!");
  }

}

// Final
playGame();
