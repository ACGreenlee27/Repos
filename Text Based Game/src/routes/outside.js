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

  const playerVisitsShed = await shedOrBackyard();

  if (playerVisitsShed === true) {
    console.log("Shed description");
  }
  if (playerVisitsShed === false) {
    console.log("backyard description.");
  }
}
