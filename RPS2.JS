//Rock, Paper, Scissors 2.0

//Write an async prompt function that takes the users input and compares it to a randomized output
//If the user loses, tell them the lose
//If the user wins, tell them they win
//If the user ties, tell them they tie
//Ask to try again

const prompts = require("prompts");

function gameOutput() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

async function rockPaperScissors() {
  const response = await prompts({
    type: "select",
    name: "userchoice",
    message: "Which would you like to select?",
    choices: [
      { title: "Rock", value: "Rock" },
      { title: "Paper", value: "Paper" },
      { title: "Scissors", value: "Scissors" },
    ],
  });

  const userResponse = response.userchoice;
  //console.log(userResponse);
  let computerChoice = gameOutput();

  if (userResponse === computerChoice) {
    console.log("You tied!");
  } else if (userResponse === "Rock" && computerChoice === "scissors") {
    console.log("You Win");
  } else if (userResponse === "Paper" && computerChoice === "rock") {
    console.log("You Win");
  } else if (userResponse === "Scissors" && computerChoice === "paper") {
    console.log("You Win");
  } else {
    console.log("You lose!");
  }
}

rockPaperScissors();
