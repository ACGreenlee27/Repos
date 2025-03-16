import prompts from "prompts";
import { gameState } from "../../game.js";

export async function outsideRoute() {
  console.log("Outside description");
  async function shedOrBackyard() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        { title: "To the shed, there's something there I need.", value: true },
        { title: "I should check the backyard.", value: false },
      ],
    });
    return response.choice;
  }
}
const playerVisitsShed = await shedOrBackyard();

if (playerVisitsShed === true) {
  console.log("Shed description");
}
if (playerVisitsShed === false) {
  console.log("backyard description.");
}

async function askPlayerBackyardQuestion() {
  const response = await prompts({
    type: "select",
    name: "choice",
    message: "Would you like to pay your respects?",
    choices: [
      { title: "Yes, it's the right thing to do.", value: true },
      { title: "No, I have no time for this.", value: false },
    ],
  });
  return response.choice;
}
const playerBackyardChoice = await askPlayerBackyardQuestion();

if (playerBackyardChoice === true) {
  hasBottle = true;
  console.log(
    "Pay respects at graves. Dig in the soft dirt and pick up a full antipsychotic bottle with your name."
  );
}
if (playerBackyardChoice === false) {
  console.log(gameState.playerName + " leaves the backyard.");
}

async function chestOrGas() {
  const response = await prompts({
    type: "select",
    name: "choice",
    message:
      "Take the gas can, " +
      gameState.playerName +
      " you know what you need to do.",
    choices: [
      { title: "Take the gas can. This house needs to go.", value: true },
      { title: "Smash open the lock.", value: false },
    ],
  });
  return response.choice;
}
const gasDecision = await chestOrGas();
if (gasDecision === true) {
  console.log("take the gas flavor text");
}
if (gasDecision === false) {
  hasGun = true;

  console.log("Open box flavor text");
}
