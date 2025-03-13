import prompts from "prompts";

export async function shedRoute() {
  console.log("Shed description");
  async function askPlayerToVisitShed() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you want to visit the shed?",
      choices: [
        { title: "Yes, there's something there I need.", value: true },
        //{ title: "No", value: false },
      ],
    });
    return response.choice;
  }
  const playerVisitsShed = await askPlayerToVisitShed(); //ask player if they want to open door
  console.log("Player visits shed", playerVisitsShed);
}
