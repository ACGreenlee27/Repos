// //practice syntax, functions

// function nameOfFunction() {
//   //function, keyword, name of function, parentheses, curly braces
// }

// function nameOfFunction() {}

// function nameOfFunction() {}

// //if statements

// //if (condition) {
// //what you want to happen or "logic"}

// //declaring variables
// //let, var, const

// let name = "Alice";
// const number = 21;
// var isHomeOwner = true;

// // write a function to add numbers, subtract numbers, divide numbers, that says hello, checks if the parameter is true or false, says goodbye, only says hello if a number is even
// //only says hello if the number is above 12, checks if someone is over 21, check if a number is even or odd, check if a number is divisible by 5
// //practice calling functions, function name + parentheses

// function addNumbers(numberOne, numberTwo) {
//   let sum = numberOne + numberTwo;
//   return sum;
// }

// console.log(addNumbers(133, 899));

// function subtractNumbers(numberOne, numberTwo) {
//   let sub = numberOne - numberTwo;
//   return sub;
// }

// console.log(subtractNumbers(133, 78909));

// function divideNumbers(numberOne, numberTwo) {
//   let div = numberOne / numberOne;
//   return div;
// }

// let total = divideNumbers(3, 4);
// console.log(total);

// function sayHi(name) {
//   let nameofGreeted = "Hello " + name;
//   return nameofGreeted;
// }
// console.log(sayHi("Alison"));

// let bird = "Duck"; //tried this with an array and it didnt work

// function isThisABirdOrNot(string) {
//   if (string === bird) {
//     return "A " + string + " is a bird!";
//   } else {
//     return "That's not a bird!";
//   }
// }
// let thisIsABird = isThisABirdOrNot("Duck");
// console.log(thisIsABird);

// function isTrueOrFalse(number) {
//   if (number === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isTrueOrFalse(17));

// function seeYouLater() {
//   return "Goodbye!";
// }

// console.log(seeYouLater());

// function ifNotEvenHeckOff(number) {
//   if (number % 2 === 0) {
//     console.log("Hello!");
//   } else {
//   }
// }

// ifNotEvenHeckOff(2);

// function overTwelve(number) {
//   if (number >= 12) {
//     console.log("Hello!");
//   } else {
//   }
// }
// overTwelve(23);

// let personThreeAge = 34;

// function checkIfOver21(personThreeAge) {
//   if (personThreeAge >= 21) {
//     console.log("Hello! You are " + personThreeAge + " and at least 21!");
//   } else {
//     console.log(
//       "Sorry, you are " +
//         personThreeAge +
//         " therefore not at least 21. This message will now self destruct."
//     );
//   }
// }

// checkIfOver21(12);

// function isThisNumberEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log("The number is even");
//   } else {
//     console.log("The number is odd");
//   }
// }

// isThisNumberEvenOrOdd(13);

// function isDivisibleByFive(number) {
//   if (number % 5 === 0) {
//     console.log("The number is divisible by 5");
//   } else {
//     console.log("The number not divisible by 5");
//   }
// }
// isDivisibleByFive(5);

// function whatIsTheMeaningOfLife(number) {
//   if (number === 42) {
//     console.log("That is correct.");
//   } else {
//     console.log("Try again.");
//   }
// }

// whatIsTheMeaningOfLife(42);

// function creditWorthiness(number) {
//   let minNumber = 650;
//   if (minNumber < number) {
//     console.log("Your credit score is " + number + " therefore qualfies!");
//     return minNumber;
//   } else {
//     console.log("Your credit score is " + number + " and does not qualify.");
//   }
// }

// creditWorthiness(200);

//Items
let starterSword = 200;
let starterHelmet = 300;
let starterPotion = 400;
let levelTwoSword = 500;
let gold = [50];

//Inventory
let playerInventory = [starterHelmet, starterSword];

//Environment
let potionButton = false;
let startingDoor = false;

function findItemInInventory(itemID) {
  let foundItem = -1;
  for (let i = 0; i < playerInventory.length; i++) {
    if (itemID === playerInventory[i]) {
      foundItem = i;
    }
  }
  return foundItem;
}

function swordLvl2() {
  //console.log("Try and upgrade sword");
  let swordFound = findItemInInventory(starterSword);
  playerInventory[swordFound] = levelTwoSword;
  console.log(playerInventory);
}

function starterPotionQuantity() {
  if ((potionButton = true)) {
    playerInventory.push(starterPotion * 2);
  } else {
    console.log("You have enough health potions!");
    potionButton = false;
  }
}

swordLvl2();
starterPotionQuantity();
console.log(playerInventory);
