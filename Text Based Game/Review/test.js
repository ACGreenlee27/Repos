// 1. Declare variables using all basic data types in JavaScript. Provide an example for each.
let string = "Alex";
var num = 9;
const boolean = false;
let myObject = { name: "Test" };
Array[(1, 2, 3)];

// 2. What are the three different ways to declare variables in JavaScript? Explain their differences and when to use each.
("var is a global variable, let is a variable that can be declared in scope or globally and can be reassigned, const can be declared globally or in scope and cannot be reassigned");
// 3. Declare a variable and assign it your name as a value.
//let name = "Cheri"
// 4. Define a function in JavaScript. Provide an example.
function myFunction() {
  console.log("A function is a block of logic.");
}
// 5. Write an example of an if-else statement that checks if a number is positive, negative, or zero.
function higherOrLower(num) {
  if (num <= 0) {
    console.log("Your number is negative.");
  } else if (num > 0) {
    console.log("Your number is positive");
  } else if (num === 0) {
    console.log("Your number is zero.");
  }
}

higherOrLower(-3);
// 6. Create a function that takes a parameter called `name` and logs "Hello, [name]!" to the console.

function sayHi(name) {
  console.log("Hi " + name + "!");
}

//sayHi("Alex");
// 7. Write a function that takes a parameter `age` and logs:
//    - "You are 21 or older" if the age is 21 or greater.
//    - "You are under 21" if the age is less than 21.

function ageVerification(age) {
  if (age <= 21) {
    console.log("You are under 21");
  } else if (age >= 21) {
    console.log("You are 21 or older");
  }
}
ageVerification(34);

// 8. Create a function that takes two parameters, adds them together, and returns the sum.
//    Example input: (2, 3)
//    Expected output: 5
function addition(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

addition(3, 4);
// 9. What is the purpose of the `return` statement in a function? Provide an example.
function inaccessibleCode() {
  //return breaks out of the function but also returns something
  console.log("Accessible code");
  return;
  console.log("Can't see this because I used return.");
}

inaccessibleCode();
// 10. Create a function that takes a number as a parameter and returns `true` if the number is even and `false` if it is odd.
function evenOrOdd(number) {
  if (number / 2) {
    console.log("true");
  } else {
    console.log("false");
  }
}

evenOrOdd(3);
