//understanding function and scope/updating arrays

//global scope (anyone can interact with me). All functions declared outside of a block are global.
var age = 30; //Global
let car = "Toyota"; //global
const homeOwner = true; //global

//Curly braces = block {}

// if (true) {
// console.log(age);
// console.log(car);
// console.log(homeOwner);
// }

//any variable declared inside a block is a local variable and can only be accessed inside their functions/blocks
//var does not have block scope, it doesn't care that its inside a block and can be called from anywhere
//let and const have block scope and will obey block scope
//when declaring a variable use a keyword (let, var, const). Any variable without a keyword is global.

function addNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
}

let total = addNumbers(6, 7);

//console.log(total);

function greetings(name) {
  //build a string thats hello + name and return
  let greeting = "Hello " + name;
  return greeting;
}
let greeting = greetings("Alice");

//console.log(greeting);

function subtractNumber(firstNumber, secondNumber) {
  let sub = firstNumber - secondNumber;
  return sub;
}

function multiplyNumberByTwo(number) {
  let mul = number * 2;
  return mul;
}

let subResult = subtractNumber(3, 7);

let mulResult = multiplyNumberByTwo(subResult);

//console.log(mulResult);

function aboveTwentyOne(number) {
  let result = true;
  if (number >= 21) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
}

//console.log(aboveTwentyOne(1));

function greetGuest(is21, name) {
  //parameters are variables without assigned values yet, when you call the function you assign the value to the parameters
  if (is21 === true) {
    return "You are over 21 " + name;
  } else {
    return "Go away " + name;
  }
}

let isTwentyOne = aboveTwentyOne(21);
console.log(greetGuest(aboveTwentyOne(23), "Alice"));
