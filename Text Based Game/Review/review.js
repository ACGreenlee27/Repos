import prompts from "prompts";

let name1 = "Alex";
const name2 = "Alex";
var name3 = "Alex";
let yourNumber = 1;

function reviewFunction() {
  //logic
  name3 = "John";
  if (name1 === "Alex") {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

let gameObject = {
  name1: "Alex",
  name2: "Alex",
  name3: "Alex",
  yourNumber: 1,
};

let myArray = [
  1,
  2,
  3,
  gameObject,
  {
    name: "Alex",
    gameOver: false,
  },
];

gameObject.name1;

//homework: write functions that use for loops

//review how to write a function, return from a function, how to use a parameter,
// how to declare data types (all five), how to write an if statement, how to compare things in an if statement.
// How to use an else.
//how to declare variables
//How to add numbers, compare strings
//math

for (let i = 0; i < 5; i++) {
  //logic
  console.log(i);
}

// 1. Declare variables using all basic data types in JavaScript. Provide an example for each.

let name = "String";
const number = 0;
var boolean = false;

// 2. What are the three different ways to declare variables in JavaScript? Explain their differences and when to use each.

//let; //for variables you want to redefine later
//const //for variables you don't want to be overwritten
//var //the lonely variable that no one likes

// 3. Declare a variable and assign it your name as a value.

//let name2 = "Cheri"

// 4. Define a function in JavaScript. Provide an example.

//A function is a block of logic.

function bagOfHolding(item) {
  console.log("You have a " + item + " in your bag of holding!");
}

bagOfHolding("banana");

// 5. Write an example of an if-else statement that checks if a number is positive, negative, or zero.

function negativeOrPos(number) {
  if (number > 0) {
    console.log(number + " is positive.");
  } else if (number < 0) {
    console.log(number + " is negative.");
  } else {
    console.log(number + " is equal to zero.");
  }
}

negativeOrPos(-4);

// 6. Create a function that takes a parameter called `name` and logs "Hello, [name]!" to the console.

function sayHi(name) {
  console.log("Hello, " + name + "!");
}

sayHi("Alex");

// 7. Write a function that takes a parameter `age` and logs:
//    - "You are 21 or older" if the age is 21 or greater.
//    - "You are under 21" if the age is less than 21.

async function ageVerification() {
  const response = await prompts({
    type: "number",
    name: "value",
    message: "How old are you?",
  });

  return response.value;
}
const ageVerified = await ageVerification();

if (ageVerified >= 21) {
  console.log("You are 21 or older");
} else if (ageVerified <= 21) {
  console.log("You are under 21");
}

// 8. Create a function that takes two parameters, adds them together, and returns the sum.
//    Example input: (2, 3)
//    Expected output: 5

function addSum(number1, number2) {
  let sum = number1 + number2;
  console.log(sum);
}

addSum(2, 3);

// 9. What is the purpose of the `return` statement in a function? Provide an example.
//return is like break, it terminates the function and tells it not to proceed any further, except return RETURNS something.
function returnTest(number1, number2) {
  if (number1 <= number2) {
    console.log(number1 + " is less than " + number2);
  } else {
    return;
    console.log("I used return, you won't be able to access this code.");
  }
}

returnTest(5, 4);

// 10. Create a function that takes a number as a parameter and returns `true` if the number is even and `false` if it is odd.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
}

evenOrOdd(7);
