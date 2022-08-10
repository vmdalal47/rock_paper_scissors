let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  if (letter === "scissors") return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove("green-glow")}, 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallComputerWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove("red-glow")}, 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallComputerWord} equals ${convertToWord(userChoice)}${smallUserWord}. It's a draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function() {userChoice_div.classList.remove("gray-glow")}, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("rock");
  })

  paper_div.addEventListener('click', function() {
    game("paper");
  })

  scissors_div.addEventListener('click', function() {
    game("scissors");
  })
}

main();
