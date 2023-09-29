//Score

let scorePlayer = 0;
let scoreComputer = 0;

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
    scorePlayer += 1;
    return `You win!\nScore:\nPlayer:${scorePlayer}\nComputer:${scoreComputer}`;
  } else if (playerSelection === computerSelection) {
    return `It's a tie!\nScore:\nPlayer:${scorePlayer}\nComputer:${scoreComputer}`;
  } else {
    scoreComputer += 1;
    return `You lose!\nScore:\nPlayer:${scorePlayer}\nComputer:${scoreComputer}`;
  }
}

function game() {
  const computerSelection = getComputerChoice();
  let playerSelection;

  playerSelection = prompt("Enter 'rock', 'scissors' or 'paper'.");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Enter 'rock', 'scissors' or 'paper'.");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Enter 'rock', 'scissors' or 'paper'.");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Enter 'rock', 'scissors' or 'paper'.");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Enter 'rock', 'scissors' or 'paper'.");
  console.log(playRound(playerSelection, computerSelection));

  if (scorePlayer === 5) {
    alert(
      `You win!!!! (Final Score:\nPlayer:${scorePlayer}\nComputer:${scoreComputer})`
    );
  }
  if (scoreComputer === 5) {
    alert(
      `You lose!!!! (Final Score:\nPlayer:${scorePlayer}\nComputer:${scoreComputer})`
    );
  }
}

game();
