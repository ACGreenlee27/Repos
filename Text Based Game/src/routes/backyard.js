import prompts from "prompts";
import { gameState, updateBottle } from "../../game.js";

export async function backyardRoute() {
  console.log("Backyard Route");
  async function visitBackyard() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you want to visit the backyard?",
      choices: [
        { title: "Yes, I'll take a closer look.", value: true },
        { title: "No, I don't have time for this.", value: false },
      ],
    });
    return response.choice;
  }
  const visitTheBackyard = await visitBackyard();

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
    updateBottle();
    console.log(
      "Pay respects at graves. Dig in the soft dirt and pick up a full antipsychotic bottle with your name."
    );
  }
  if (playerBackyardChoice === false) {
    console.log(gameState.playerName + " leaves the backyard.");
  }
}
