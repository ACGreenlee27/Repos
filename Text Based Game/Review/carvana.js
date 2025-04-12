import prompts from "prompts";

//Create a car vending machine that matches vehicles to users based on input

const carVending = {
  inProgress: true,
};

const quirks = [
  "Paint is peeling",
  "Wild animals wrecked the interior",
  "Flooded",
  "Bad title",
  "Recovered in FBI sting",
  "All the tires are flat",
  "Blown engine",
  "The transmission will go out in 30 days",
];
const availableCars = [];
const filteredCars = [];

availableCars.push({
  make: "Chevrolet Corvette",
  speed: "Fast",
  color: "Blue",
  value: 50000,
  condition: "used",
  quirk: "",
});
availableCars.push({
  make: "Chevrolet Corvette",
  speed: "Fast",
  color: "Red",
  value: 80000,
  condition: "used",
  quirk: "",
});
availableCars.push({
  make: "Chevrolet Corvette",
  speed: "Fast",
  color: "Yellow",
  value: 90000,
  condition: "new",
  quirk: "",
});
availableCars.push({
  make: "Ford Focus",
  speed: "Slow",
  color: "Red",
  value: 10000,
  condition: "used",
  quirk: "",
});
availableCars.push({
  make: "Ford Focus",
  speed: "Slow",
  color: "Blue",
  value: 50000,
  condition: "new",
  quirk: "",
});
availableCars.push({
  make: "Ford Focus",
  speed: "Slow",
  color: "Yellow",
  value: 60000,
  condition: "new",
  quirk: "",
});
availableCars.push({
  make: "Kia Soul",
  speed: "Moderate",
  color: "Red",
  value: 30000,
  condition: "new",
  quirk: "",
});
availableCars.push({
  make: "Kia Soul",
  speed: "Moderate",
  color: "Yellow",
  value: 15000,
  condition: "used",
  quirk: "",
});
availableCars.push({
  make: "Kia Soul",
  speed: "Moderate",
  color: "Blue",
  value: 20000,
  condition: "used",
  quirk: "",
});

//Quirk System
function randomQuirk() {
  const randomIndex = Math.floor(Math.random() * quirks.length);
  filteredCars.quirk = randomIndex;
  return [randomIndex];
}

//2 parameters
// the array to check
// the value to check for
function alreadyExist(array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && typeof searchValue === "string") {
      if (array[i].toUpperCase() === searchValue.toUpperCase()) {
        return true;
      }
    } else {
      if (array[i] === searchValue) {
        return true;
      }
    }
  }
  return false;
}

// availableCars[0]["make"] - Accessing whats inside objects in a different way

function getList(keyName) {
  const list = [];
  for (let i = 0; i < availableCars.length; i++) {
    if (alreadyExist(list, availableCars[i][keyName]) === false) {
      list.push(availableCars[i][keyName]);
    }
  }
  return list;
}

function createChoices(list) {
  const choices = [];
  for (let i = 0; i < list.length; i++) {
    choices.push({ title: list[i], value: list[i] });
  }
  return choices;
}

async function askMakeQuestion() {
  const response = await prompts({
    type: "select",
    name: "choice",
    message: "What is the make and model of the vehicle you're purchasing?",
    choices: createChoices(getList("make")),
  });
  return response.choice;
}

const chosenMake = await askMakeQuestion();

async function askColorQuestion() {
  const response = await prompts({
    type: "select",
    name: "choice",
    message: "What is the desired color of the vehicle you're purchasing?",
    choices: createChoices(getList("color")),
  });
  return response.choice;
}

const chosenColor = await askColorQuestion();

async function askConditionQuestion() {
  const response = await prompts({
    type: "select",
    name: "choice",
    message: "What is the desired condition of the vehicle you're purchasing?",
    choices: createChoices(getList("condition")),
  });
  return response.choice;
}

const chosenCondition = await askConditionQuestion();

// async function askPricingQuestion() {
//   const response = await prompts({
//     type: "select",
//     name: "choice",
//     message: "What is the desired condition of the vehicle you're purchasing?",
//     choices: createChoices(getList("value")),
//   });
//   return response.choice;
// }

// const chosenPrice = await askPricingQuestion();

function filterCars() {
  for (let i = 0; i < availableCars.length; i++) {
    if (
      chosenMake === availableCars[i].make &&
      chosenColor === availableCars[i].color &&
      chosenCondition === availableCars[i].condition
    ) {
      filteredCars.push(availableCars[i]);
      randomQuirk();
    }
  }
  return filteredCars;
}

filterCars();
console.log(filteredCars);

const numberList = getList("value");

function max() {
  let max = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    if (max < numberList[i]) {
      max = numberList[i];
    }
  }
  return max;
}
function min() {
  let max = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    if (max > numberList[i]) {
      max = numberList[i];
    }
  }
  return max;
}

const maxValue = max();
const minValue = min();

//console.log(maxValue);
//console.log(minValue);

// console.log(min);

// // 5000 - 10000
// 5000 - 6000
// 6000 - 7000
// 7000 - 8000
// 8000 - 9000
// 9000 - 10000
