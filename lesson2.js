//Arrays and Loops
var name = "alex";
var isHomeOwner = true;
var number = 1;

//array = list of things, collections of data stored in one variable

// var numbers = [1, 2, 3];

//console.log(numbers);

var fruits = ["apple", "banana", "orange"];

// console.log(fruits);

// console.log(fruits[2]);

// for (let i = 0; i < 11; i++) {
//   console.log("This is loop number " + i);
// }
// console.log(fruits.length);

//for loop >
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

var numbers = [];

// console.log(numbers[2] + " multiplied by 2 = " + numbers[2] * 2);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] + " multiplied by 2 = " + numbers[i] * 2);
// }

// console.log(numbers);
// numbers.push(47);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();

// console.log(numbers);

for (let i = 0; i < 11; i++) {
  numbers.push(i * 2);
  //   console.log(numbers);
}

// console.log(numbers);

// var movies = ["scream", "house on haunted hill", "annabelle"];

// movies.push("bride of chucky");
// console.log(movies);
// movies.push("the conjuring", "the conjuring 2", numbers);
// console.log(movies);
// movies[6].pop();
// console.log(movies);

//For lets you run the same code repeatedly without rewriting it
// console.log(numbers);
// numbers.push(37);
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i] + " is even");
//   } else {
//     console.log(numbers[i] + " is odd");
//   }
// }

var names = ["ashlee", "john", "tim", "isabelle "];

function greetings(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log("Hello " + array[i]);
  }
}

// greetings(names);

function multiply(number) {
  return number * 2; //output
}

let multipliedNumber = multiply(2);

// console.log(multipliedNumber);

//Homework = Write a function that takes in an array of numbers and returns the largest number. Don't use math.max or reduce. USE A FOR LOOP.

// ///Use a for loop
// findMax([3,7,2,9,1]); // Output: 9
// findMax([-5, -3, -1]); // Output: -1
// findMax([10]); // Output: 10

var array = [3, 7, 2, 9, 1];
let maxNumber = array[0]; //Set the maximum number at the very start of my array to zero
let minNumber = array[0];

function findMax(array) {
  for (let i = 0; i < array.length; i++) {
    //loop through each of the numbers
    if (array[i] > maxNumber) {
      //if whatever current index is bigger than what the previous max number is,
      maxNumber = array[i]; //update max number to that number. don't do this more times than arr.length
    }
  }
  return maxNumber; //stop at max number
}
//console.log(findMax(array)); //log that max number

function findMin(array) {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    //loop through each of the numbers
    //console.log(array[i]);
    if (array[i] < minNumber) {
      //if whatever current index is bigger than what the previous max number is,
      minNumber = array[i]; //update max number to that number. don't do this more times than arr.length
    }
  }
  return minNumber; //stop at max number
}

console.log(findMin(array));
