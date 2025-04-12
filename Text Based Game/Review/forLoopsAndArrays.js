let myArray = [1, 2, 3, 4]; //Arrays use zero base indexing, counts start from 0

let myItem = myArray[1]; //2

// console.log(myItem);

// console.log("Before push", myArray);
myArray.push(5);
myArray.push(6);
// console.log("After push", myArray);

myArray.pop();
// console.log("After pop", myArray);

const arryLength = myArray.length;

// console.log("The length of my array is:", myArray.length);

//FOR LOOPS

let numbersArray = [1, 2, 3, 4];

let evenNumbers = [];

function checkIfEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even: ", number);
    return true;
  } else {
    console.log("ODD: ", number);
    return false;
  }
}

function getEvenNumbers() {
  for (let i = 0; i < numbersArray.length; i++) {
    const isEven = checkIfEvenOrOdd(numbersArray[i]);

    if (isEven === true) {
      evenNumbers.push(numbersArray[i]);
    }
  }

  console.log(evenNumbers);
}

//getEvenNumbers();

// checkIfEvenOrOdd(numbersArray[0]);
// checkIfEvenOrOdd(numbersArray[1]);
// checkIfEvenOrOdd(numbersArray[2]);
// checkIfEvenOrOdd(numbersArray[3]);
// checkIfEvenOrOdd(numbersArray[4]);

function checkNumbersArray() {
  for (let index = 0; index < numbersArray.length; index++) {
    //LOGIC
    checkIfEvenOrOdd(numbersArray[index]);
  }
}
//checkNumbersArray();

let myUsers = ["Alex", "Aaron", "Pam", "Gian"];

function greetUser(name) {
  console.log("Hello " + name + "!");
}

//greetUser(myUsers[3]);

function greetUsers() {
  for (let i = 0; i < myUsers.length; i++) {
    greetUser([myUsers[i]]);
  }
}

//greetUsers();

let scores = [100, 220, 53, 45];
let players = ["Alex", "Aaron", "Pam", "Gian"];

function sayScore(name, score) {
  console.log("Player " + name + " scored " + score + "!");
}

//sayScore(players[0], scores[0]);

function displayResults() {
  for (let i = 0; i < scores.length; i++) {
    sayScore(players[i], scores[i]);
  }
}

//displayResults();

let newNumbers = [200, 300, 300, 400, 600, 600, 600, 1200, 4500];

function multiplyByTwo(num) {
  let sum = num * 2;
  console.log(sum);
}
//multiplyByTwo(newNumbers[2]);

function addNumbers(array) {
  let sum = array;
}
function multiplyNumbers() {
  for (let i = 0; i < newNumbers.length; i++) {
    multiplyByTwo(newNumbers[i]);
  }
}

//multiplyNumbers();

//Homework: Get the sum of all the numbers in an array, Get the largest number in an array, Count how many times a specific number appears in an array

function addArray() {
  let sum = 0;
  for (let i = 0; i < newNumbers.length; i++) {
    sum += newNumbers[i]; //update the index by adding and pushing the new value to i
  }
  console.log(sum);
}
//addArray();

function findBiggest() {
  //Working
  let max = newNumbers[0];
  for (let i = 0; i < newNumbers.length; i++) {
    if (newNumbers[i] > max) {
      max = newNumbers[i];
    }
  }
  console.log(max);
}

//findBiggest();

function findCount(number) {
  //gotta give it a number as a parameter to tell it what to check against
  let count = 0;
  for (let i = 0; i < newNumbers.length; i++) {
    if (newNumbers[i] === number) count++; //increment value of count IF that index is equal to the parameter
  }
  console.log(count);
}

//findCount(600);

//updating specific positions in arrays, use the index
const testScores = [50, 90, 80, 100, 50, 50, 50, 50];

//console.log(testScores[0]);

testScores[0] = 70;

//console.log(testScores[0]);

function updateTestScore(newScore, oldScore) {
  for (let i = 0; i < testScores.length; i++) {
    if (testScores[i] === oldScore) {
      testScores[i] = newScore;
    }
  }
}

//updateTestScore(100, 90);

//console.log(testScores);

function passingScores() {
  let passingScoresArray = [];
  for (let i = 0; i < testScores.length; i++) {
    if (testScores[i] > 50) {
      passingScoresArray.push(testScores[i]);
    }
  }
  console.log(passingScoresArray);
}

//passingScores();

//array of arrays
const chessBoard = [["Rook", "white"], ["Knight"], ["Pawn"], ["Bishop"]];

//console.log(chessBoard[0][1]);

const ages = [1, 5, 3, 2, 4];

var temp = ages[3]; //80
ages[3] = ages[4]; // 80 > 34
ages[4] = temp; //80

//console.log(ages);

//Bubble sort Algorithm
function orderNumbers() {
  for (let i = 0; i < ages.length; i++) {
    //i = 0
    for (let j = 0; j < ages.length - 1; j++) {
      if (ages[j] > ages[j + 1]) {
        var temp = ages[j]; //= assigning THIS to THAT
        ages[j] = ages[j + 1];
        ages[j + 1] = temp;
      }
      console.log(ages);
    }
  }
}

//orderNumbers();
//console.log(ages);

let names = ["Tabby", "Alex", "Cheri", "Annie", "Stan"];

function nameFinder(foundName) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === foundName) {
      return i;
    }
  }
  return null;
}

let foundIndex = nameFinder("Alex");

//is not
//positive logic
if (foundIndex === null) {
} else {
  console.log(names[foundIndex]);
}
