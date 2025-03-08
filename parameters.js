//Think of functions as vending machines
//We tell the function what we want with parameters and the function gives us that thing back

function getSnack(snackName) {
  console.log("Here is your " + snackName);
}

//getSnack("Cola");

function makeSentance(name, verb, noun) {
  return name + " loves to " + verb + " a " + noun;
}

//console.log(makeSentance("Alice", "eat", "pizza"));

function smoothieMaker(fruit1, fruit2) {
  return "Blending " + fruit1 + " and " + fruit2 + " into a smoothie!";
}

console.log(smoothieMaker("Banana", "Strawberry"));
