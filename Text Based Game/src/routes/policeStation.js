import prompts from "prompts";
import { gameState } from "../../game.js";

export async function confessionRoute() {
  console.log("Station flavor text");
  async function askPlayerToConfess() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you want to confess?",
      choices: [
        { title: "Yes, I know what I need to do.", value: true },
        //{ title: "No", value: false },
      ],
    });
    return response.choice;
  }

  const playerConfessed = await askPlayerToConfess();
}
