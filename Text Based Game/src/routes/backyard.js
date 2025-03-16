import prompts from "prompts";

export async function backyardRoute() {
  console.log("Backyard Route");
  async function visitBackyard() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you want to visit the backyard?",
      choices: [
        { title: "Yes, I'll take a closer look.", value: true },
        //{ title: "No", value: false },
      ],
    });
    return response.choice;
  }
  const visitTheBackyard = await visitBackyard();
}
