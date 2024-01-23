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

function playRound(playerSelection, computerSelection) {
  const user = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  if (user == computer) {
    return "It's a tie! Computer chose " + computerSelection + ".";
  } else if (user == "rock" && computer == "scissors" || user == "paper" && computer == "rock" || user == "scissors" && computer == "paper") {
    return "You win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection + ".";
  }
}
