import prompts from "prompts";
import { gameState, updateArea, updateGameOver } from "../../game.js";

export async function exteriorRoute() {
  console.log(
    "EXTERIOR, douse the house in gasoline and set the house ablaze. Screen flutters, house is new, hear the sound of your family screaming."
  );
  async function exteriorChoice() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message:
        "Are you satisfied with what you've done, " +
        gameState.playerName +
        "?",
      choices: [
        {
          title: "Yes, I did what I had to I did what YOU told me to.",
          value: true,
        },
        {
          title: "No, I regret everything. Why did you make me do this?",
          value: false,
        },
      ],
    });
    return response.choice;
  }

  const endingPath1 = await exteriorChoice();

  if (endingPath1 === true) {
    console.log("good ending, get away with it, at what cost");
    updateGameOver();
  } else if ((gameState.hasBottle === true, endingPath1 === false)) {
    console.log("suicide ending");
    updateGameOver();
  }
}
