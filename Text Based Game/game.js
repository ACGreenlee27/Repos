import prompts from "prompts";
import { basementRoute } from "./src/routes/basement.js"; //remeber to put the .js
import { closetRoute } from "./src/routes/closet.js";
import { atticRoute } from "./src/routes/attic.js";

let whereToGo = "";
let hasKey = false;
export let endGame = false;
let hasAxe = false;
export let playerName = "";

export function updateKey() {
  hasKey = true;
}
export function updateAxe() {
  hasAxe = true;
}

export function updateGameOver() {
  endGame = true;
}
async function runGame() {
  async function routes() {
    //This just runs Break gets out of the switch.
    switch (whereToGo) {
      case "Basement":
        await basementRoute(playerName);
        break;
      case "END GAME":
        endGame = true;
        break;

      case "Closet":
        await closetRoute(hasKey);
        break;
      case "Attic":
        await atticRoute(hasAxe);
        break;

      default:
        console.error("No route found for " + whereToGo);
        break;
    }
  }
  //Ask player where to go
  async function askPlayerwhereToGo() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        { title: "Basement", value: "Basement" },
        { title: "Closet", value: "Closet" },
        { title: "Attic", value: "Attic" },
        { title: "END GAME", value: "END GAME" },
      ],
    });
    return response.choice;
  }
  //Ask player where to go
  async function askPlayerwhereToGoOutside() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        { title: "Basement", value: "Basement" },
        { title: "Closet", value: "Closet" },
        { title: "Attic", value: "Attic" },
        { title: "END GAME", value: "END GAME" },
      ],
    });
    return response.choice;
  }

  async function askForName() {
    const response = await prompts({
      type: "text",
      name: "playerName",
      message: "What is your name?",
    });
    return response.playerName;
  }
  playerName = await askForName(); //Save Player Name
  console.log("Hello " + playerName);

  //Ask player first question, return, save answer
  async function askPlayerWakeUpQuestion() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you know where you are?",
      choices: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    });
    return response.choice;
  }

  await askPlayerWakeUpQuestion(); //Ask first question

  console.log(
    "Somewhere deep in your memories, you vaguely recall this place. This...echo of reality; a whisper of long fragmented memories. You step cautiously onto the rotting wooden porch, the boards creaking beneath your weight as a thick fog coils around your ankles. The house looms before you, its once-proud frame now sagging, the paint peeling in long, curling strips. A single, shattered window gapes like a vacant eye, its jagged edges glinting in the dim, gray light. The front door groans as you push it open, revealing a hallway choked with dust and the scent of damp wood. Faint moonlight filters through gaps in the warped walls, casting twisting shadows. To your left, a strangely ornate but narrow closet door stands firmly shut, a faint scratching noise echoing from within; but whether it's the wind or something else, you can’t be sure. Ahead, a staircase descends into the basement, its steps disappearing into an abyss of black. The air down there is colder, thick with the metallic tang of old, stagnant water. Something shifts in the darkness below, too faint to see but heavy enough to sense. Above you, a frayed rope dangles from the ceiling, leading to the attic hatch. A single tug, and the wooden ladder creaks down, releasing a gust of stale air. The attic waits, its rafters lost in shadow, filled with forgotten relics and the weight of something unseen—watching. Everywhere, the house breathes, the walls settling with tired groans, the fog pressing against the windows like ghostly hands. Where would you like to explore?"
  );

  while (endGame === false) {
    console.log("haskey", hasKey);
    whereToGo = await askPlayerwhereToGo();
    await routes();
  }
  console.log("Game Over");
}

runGame();
