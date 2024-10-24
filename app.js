const option = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let rounds = 0;
const round_left = 5
let usersChoice;
let computersChoice = "";

let userWin = false;
let computerWin = false;
let draw = false;

const container = document.querySelector(".game-container");
const div = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const playAgain = document.createElement("button");
//
const h1 = document.createElement("h1");
const p = document.createElement("p");
//
let gameStatus = document.createElement("p");
let showScore = document.createElement("p");
let winStatus = document.createElement("h3");

h1.textContent = "Rock Paper Scissors";
p.textContent = "Choose between the buttons below";
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
playAgain.textContent = "Play Again";
playAgain.className = "play-again"
gameStatus.textContent;
winStatus.textContent;

//
rock.style.margin = "5px";
scissors.style.margin = "5px";
playAgain.style.display = "None";

div.className = "btn-div";
container.appendChild(h1);
container.appendChild(p);
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
div.appendChild(playAgain);
container.appendChild(gameStatus);
container.appendChild(showScore);
container.appendChild(div);
container.appendChild(winStatus);

function getUserChoice(event) {
  let a = event.target.textContent.toLowerCase();
  console.log(a);
  if (option.includes(a)) {
    usersChoice = a;
  } else {
    console.log("Try again");
  }
}

function getComputerChoice() {
  let randomChoice = option[Math.floor(Math.random() * option.length)];
  computersChoice = randomChoice;
}

function playRound(userChoice, computerChoice) {
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
  } else if (userChoice == computerChoice) {
    draw = true;
    drawScore += 1;
    gameStatus.textContent = `That was a draw\nYou choose ${userChoice}, Computer choose ${computerChoice}`;
  }

  if (userWin) {
    userScore += 1;
    gameStatus.textContent = `You win :) this round\nYou chose ${userChoice},computer chose ${computerChoice}`;
  } else if (computerWin) {
    computerScore += 1;
    gameStatus.textContent = `You lost :( this round\nYou chose ${userChoice},computer chose ${computerChoice}`;
  }
  if (draw) {
    console.log(
      `Final Score\nPlayer: ${userScore}\nComputer ${computerScore}\nDraw: ${drawScore}`
    );
  }
}

function playGame() {
  userWin = false;
  computerWin = false;
  draw = false;

  getComputerChoice();
  playRound(usersChoice, computersChoice);

  showScore.textContent = `Player - ${userScore} | Computer - ${computerScore} | Draw- ${drawScore}`;
  rounds++;
  if (rounds === round_left) {
    winStatus.style.display = "block";

    if (userScore > computerScore) {
      winStatus.textContent = "User wins!";
      winStatus.style.color = "green";
    } else if (userScore < computerScore) {
      winStatus.textContent = "Computer wins!";
      winStatus.style.color = "red";
    } else {
      winStatus.style.color = "black"
      winStatus.textContent = "It's a tie!";
    }

    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;

    playAgain.style.display = "inline"

    
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  drawScore = 0;
  rounds = 0;

  //
  showScore.textContent = `Player - ${userScore} | Computer - ${computerScore} | Draw- ${drawScore}`;
  gameStatus.textContent = "";

  rock.disabled = false;
  scissors.disabled = false;
  paper.disabled = false;
  //
  winStatus.style.display = "none";
  playAgain.style.display = "none";
}

function handleChoice(event) {
  getUserChoice(event);
  playGame();
}

rock.addEventListener("click", handleChoice);
paper.addEventListener("click", handleChoice);
scissors.addEventListener("click", handleChoice);
playAgain.addEventListener("click", resetGame);
