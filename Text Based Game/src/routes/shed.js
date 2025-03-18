import prompts from "prompts";
import { gameState, updateArea, updateGun } from "../../game.js";

export async function shedRoute() {
  console.log("Inside of shed. Point out the chained chest and the gas can.");
  async function theShed() {
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
  const gasDecision = await theShed();

  if (gasDecision === true) {
    console.log("take the gas flavor text");
    updateArea(3);
  }
  if (gasDecision === false) {
    updateGun();

    console.log("Open box flavor text");
  }
}
