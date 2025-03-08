//Computer chooses a number 1-10
//User guesses number 1-10
//If the user guesses correctly he wins, else he loses
//No retries

function computerChoice() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return numbers[Math.floor(Math.random() * numbers.length)];
}
//console.log(computerChoice());

function determineWinner(usersGuess) {
  let computer = computerChoice();
  if (usersGuess === computer) {
    return "You guessed correctly!";
  } else {
    return "Computer chose " + computer + " you guessed incorrectly!";
  }
}

//console.log(determineWinner(8));

//Computer gets a random number 1-10
//User gets a random number 1-10 (hard coded)
//User gets a choice to add a random number 1-10 to his current number
//If the user goes over 10 he automatically loses
//If the users number is below the computers number he loses
//If the users number is above the computers number he wins

let userNumber = 5;

function randomNumberAddition() {
  return userNumber + computerChoice();
}
//console.log(randomNumberAddition());

function figureOutWinner() {
  let computer = computerChoice();
  let user = randomNumberAddition();
  console.log("computer", computer);
  console.log("user", user);
  if (user > 10) {
    return "Your number is greater than ten, you lost.";
  } else if (computer === user) {
    return "You tied.";
  } else if (computer > user) {
    return "Your number is lower.";
  } else if (computer < user) {
    return "Your number is higher.";
  }
}

console.log(figureOutWinner());
