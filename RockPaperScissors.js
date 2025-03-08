//Make rock papers scissors game

//Write flow first

//1. Decide the choices
//2. Define which element beats which element - Paper beats rock, rock beats scissors, scissors beats paper
//3. Get the input from the user
//4. Check the input against the definition
//5. Return the results

//The sole purpose of this function is to chose the computers option
function gameOutput() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//This function determines who wons the game, needs computers choice and users choice
function whoWon(userChoice, gameChoice) {
  if (userChoice === gameChoice) {
    return "You tied!";
  } else if (userChoice === "rock" && gameChoice === "scissors") {
    return "You Win";
  } else if (userChoice === "paper" && gameChoice === "rock") {
    return "You Win";
  } else if (userChoice === "scissors" && gameChoice === "paper") {
    return "You Win";
  } else {
    return "You lose!";
  }
}

//Executes the game
function rockPaperScissorsGame(userChoice) {
  let computerChoice = gameOutput();
  console.log("Computer chose", computerChoice);
  console.log("User Chose", userChoice);
  let winner = whoWon(userChoice, computerChoice);
  console.log(winner);
}

rockPaperScissorsGame("rock");
