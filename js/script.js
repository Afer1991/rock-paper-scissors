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
console.log(getComputerChoice());