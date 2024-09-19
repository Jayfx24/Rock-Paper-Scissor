let option = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;
let rounds = 5;

function getComputerChoice() {
  let randomChoice = option[Math.floor(Math.random() * option.length)];
  return randomChoice;
}

// getComputerChoice()
// get user input
function getUserChoice() {
  let userInput = prompt("Dear Player\nRock, Paper, Scissors: ");
  if (option.includes(userInput.toLowerCase())) {
    return userInput;
  } else {
    getUserChoice();
  }
}

// getUserChoice()

function playRound(userChoice, computerChoice) {
  let userWin = false;
  let computerWin = false;

  // getUserChoice()

  if (userChoice == "rock" && computerChoice == "scissors") {
    userWin = true;
  } else if (computerChoice == "rock" && userChoice == "scissors") {
    computerWin = true;
  } else if (userChoice == "paper" && computerChoice == "rock") {
    userWin = true;
  } else if (computerChoice == "paper" && userChoice == "rock") {
    computerWin = true;
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    userWin = true;
  } else if (computerChoice == "scissors" && userChoice == "paper") {
    computerWin = true;
  } else {
    return(console.log("That was a draw"))
    // playRound(getUserChoice(), getComputerChoice());
  }
  if (userWin) {
    userScore += 1;
    return console.log(
        `You win :) this round\nYou chose ${userChoice},computer chose ${computerChoice}`
      );
  } else {
    computerScore += 1;
    return console.log(
      `You lost :( this round\nYou chose ${userChoice},computer chose ${computerChoice}`
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getUserChoice(), getComputerChoice());

    if (i == 4) {
      return console.log(
        `Final Score\nPlayer: ${userScore}\nComputer ${computerScore}`
      );
    }
  }
}

playGame();
