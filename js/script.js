let wins = 0;
let losses = 0;

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
    return "It's a tie! Computer chose " + computerSelection + ".";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    wins ++;
    return "You win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    losses ++;
    return "You lose! " + computerSelection + " beats " + playerSelection + ".";
  }
}

function game() {
  for(i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log("User: " + wins + " Computer: " + losses);
  }
  if (wins > losses) {
    console.log("You won!");
  } else if (wins < losses) {
    console.log("You lost...");
  } else {
    console.log("Rematch!");
    do {
      console.log(playRound(getPlayerChoice(), getComputerChoice()));
      console.log("User: " + wins + " Computer: " + losses);
    } while (wins == losses);
    if (wins > losses) {
      console.log("You won!");
    } else {
      console.log("You lost...");
    }
  }
}

game();