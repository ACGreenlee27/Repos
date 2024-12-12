var age = 25; //number
var name = "AC"; //string
var isOver21 = true; //bool
var myObject = {}; //object
var myArray = []; //array

//var = global let = similar to var, anyone can see but only in the scope  Const = whatever you declare, const will stay. can't manipulate
// st
var personOneName = "Alice";
var personOneAge = 21;
var personOneHomeOwner = false;
var personTwoName = "John";
var personTwoAge = 12;
var personTwoHomeOwner = true;

//console.log(personOneAge - personTwoAge);

//  if (personOneAge >= 21) {

//     console.log("Is over 21");
//  }else {
//         console.log("Is not 21")
//     }

function checkover21(age, name, isOwner) {
  console.log(
    "I am going to check the age and home owner status of " + name + " now!"
  );
  if (age >= 21) {
    if (isOwner === true) {
      console.log(name + " is over 21 and is a home owner");
    } else {
      console.log(name + " is over 21 but is not a home owner");
    }
  } else {
    if (isOwner === true) {
      console.log(name + " is not over 21 and is a home owner");
    } else {
      console.log(name + " is not over 21 and is not a home owner");
    }
  }
}

checkover21(personOneAge, personOneName, personOneHomeOwner);

var numberOfAnimalsOwned = 2;
var noAnimalsOwned = 0;
numberOfAnimalsOwned = 27;
function checkIfAnimalsOwned(number) {
  console.log(number);

  if (number >= 1) {
    console.log("Owns animals!");
  } else {
    console.log("Does not own animals!");
  }
}

// checkIfAnimalsOwned(numberOfAnimalsOwned);

function checkIfHomeOwner(isOwner) {
  if (isOwner === true) {
    console.log("Is home owner");
  } else {
    console.log("Is not home owner");
  }
}
// checkIfHomeOwner(personTwoHomeOwner)

//homework - write a function/script that takes a number and checks if a number is even or odd
