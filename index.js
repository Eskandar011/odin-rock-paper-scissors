//Score

function getComputerChoice() {
  const random = Math.round(Math.random() * (3 - 1) + 1);
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win!`;
  } else if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else {
    return `You lose!`;
  }
}
