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
