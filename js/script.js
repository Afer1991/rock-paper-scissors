let wins = 0;
let losses = 0;
let draws = 0;
const winText = document.querySelector('#wins');
const lossText = document.querySelector('#losses');
const drawText = document.querySelector('#draws');
const winnerText = document.querySelector('#winner');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);

function getComputerChoice() {
  const election = Math.floor(Math.random()*3);
  if (election === 0) {
    return "Rock";
  } else if (election === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getPlayerChoice () {
  const choice = prompt("Choose: Rock Paper Scissors");
  if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase(); 
  } else {
    getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    draws ++;
    text.innerText = "It's a tie! Computer chose " + computerSelection + ".";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    wins ++;
    text.innerText = "You win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    losses ++;
    text.innerText = "You lose! " + computerSelection + " beats " + playerSelection + ".";
  }
}

function chooseRock() {
  playRound("Rock", getComputerChoice());
  winText.innerText = wins;
  lossText.innerText = losses;
  drawText.innerText = draws;
  if (wins == 5) {
    winner.innerText = "Congratulations, you won!";
    endGame();
  } else if (losses == 5) {
    winner.innerText = "Tough luck, computer beat you..."
    endGame();
  }
}

function choosePaper() {
  playRound("Paper", getComputerChoice());
  winText.innerText = wins;
  lossText.innerText = losses;
  drawText.innerText = draws;
  if (wins == 5) {
    winner.innerText = "Congratulations, you won!";
    endGame();
  } else if (losses == 5) {
    winner.innerText = "Tough luck, computer beat you..."
    endGame();
  }
}


function chooseScissors() {
  playRound("Scissors", getComputerChoice());
  winText.innerText = wins;
  lossText.innerText = losses;
  drawText.innerText = draws;
  if (wins == 5) {
    winner.innerText = "Congratulations, you won!";
    endGame();
  } else if (losses == 5) {
    winner.innerText = "Tough luck, computer beat you...";
    endGame();
  }
}

function endGame() {
  rock.innerText = "Replay";
  paper.innerText = "Replay";
  scissors.innerText = "Replay";
  rock.removeEventListener('click', chooseRock);
  paper.removeEventListener('click', choosePaper);
  scissors.removeEventListener('click', chooseScissors);
  rock.addEventListener('click', restart);
  paper.addEventListener('click', restart);
  scissors.addEventListener('click', restart);
}

function restart() {
  rock.innerText = "Rock";
  paper.innerText = "Paper";
  scissors.innerText = "Scissors";
  wins = 0;
  losses = 0;
  draws = 0;
  winText.innerText = wins;
  lossText.innerText = losses;
  drawText.innerText = draws;
  text.innerText = "";
  winner.innerText = "";
  rock.removeEventListener('click', restart);
  paper.removeEventListener('click', restart);
  scissors.removeEventListener('click', restart);
  rock.addEventListener('click', chooseRock);
  paper.addEventListener('click', choosePaper);
  scissors.addEventListener('click', chooseScissors);
}