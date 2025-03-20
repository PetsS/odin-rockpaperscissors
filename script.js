// global variables to track score
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

// DOM
const buttonContainer = document.querySelector("#buttons");
const buttons = buttonContainer.querySelectorAll("button");
const table = document.querySelector("#table");
const tdPlayerChoice = document.querySelector("#playerChoice");
const tdComputerChoice = document.querySelector("#computerChoice");
const whoScoresMessage = document.querySelector("#scoreMessage");
const tdPlayerScore = document.querySelector("#playerScore");
const tdComputerScore = document.querySelector("#computerScore");
const round = document.querySelector("#round");
const btnPlayAgain = document.querySelector("#btnPlayAgain");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});

btnPlayAgain.addEventListener("click", resetGame);

// Computer's Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  // Generate a random number
  let randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
  let message = "";

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      message = "You Score!";
    } else if (computerChoice === "paper") {
      computerScore++;
      message = "Computer Scores!";
    } else {
      message = "Nobody Scores!";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      message = "You Score!";
    } else if (computerChoice === "scissors") {
      computerScore++;
      message = "Computer Scores!";
    } else {
      message = "Nobody Scores!";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      message = "You Score!";
    } else if (computerChoice === "rock") {
      computerScore++;
      message = "Computer Scores!";
    } else {
      message = "Nobody Scores!";
    }
  }

  roundCounter++;
  round.textContent = "Round : " + roundCounter;
  return message;
}

function displayScore(
  humanSelection,
  computerSelection,
  humanScore,
  computerScore
) {
  tdPlayerChoice.textContent = humanSelection;
  tdComputerChoice.textContent = computerSelection;
  tdPlayerScore.textContent = humanScore;
  tdComputerScore.textContent = computerScore;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCounter = 0;
  round.textContent = "";
  tdPlayerChoice.textContent = "";
  tdComputerChoice.textContent = "";
  tdPlayerScore.textContent = "";
  tdComputerScore.textContent = "";
  whoScoresMessage.textContent = "";
  buttons.forEach((button) => {
    button.disabled = false;
  });
  btnPlayAgain.style.visibility = "hidden";
}

function playGame(playerChoice) {
  let humanSelection = playerChoice;
  let computerSelection = getComputerChoice();

  whoScoresMessage.textContent = playRound(humanSelection, computerSelection);

  displayScore(humanSelection, computerSelection, humanScore, computerScore);

  if (humanScore == 5 || computerScore == 5) {
    if (humanScore == 5) {
      whoScoresMessage.textContent = `Congratulations, You Win!`;
    } else if (computerScore == 5) {
      whoScoresMessage.textContent = `Computer wins!`;
    }
    // disable buttons if the score reaches 5
    buttons.forEach((button) => {
      button.disabled = true;
    });
    // make the Play Again button visible
    btnPlayAgain.style.visibility = "visible";
  }
}
