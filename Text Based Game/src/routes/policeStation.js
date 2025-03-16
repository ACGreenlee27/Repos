import prompts from "prompts";
import { updateArea } from "../../game";

export async function confessionRoute() {
  console.log("Station");
  async function askPlayerToVonfess() {
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
  const playerConfessed = await playerConfessed();
}
