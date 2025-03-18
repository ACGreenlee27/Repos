import prompts from "prompts";
import { basementRoute } from "./src/routes/basement.js"; //remeber to put the .js
import { closetRoute } from "./src/routes/closet.js";
import { atticRoute } from "./src/routes/attic.js";
import { outsideRoute } from "./src/routes/outside.js";
import { confessionRoute } from "./src/routes/policeStation.js";
import { backyardRoute } from "./src/routes/backyard.js";
import { shedRoute } from "./src/routes/shed.js";
import { exteriorRoute } from "./src/routes/exterior.js";

export const gameState = {
  whereToGo: "",
  hasKey: false,
  endGame: false,
  hasAxe: false,
  hasGun: true,
  hasBottle: false,
  playerName: "",
  area: 0,
};

export async function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

export function updateKey() {
  gameState.hasKey = true;
}
export function updateAxe() {
  gameState.hasAxe = true;
}
export function updateBottle() {
  gameState.hasBottle = true;
}
export function updateGun() {
  gameState.hasGun = true;
}

export function updateGameOver() {
  gameState.endGame = true;
}
export function updateArea(area) {
  gameState.area = area;
}

async function runGame() {
  async function routes() {
    //This just runs Break gets out of the switch.
    switch (gameState.whereToGo) {
      case "Basement":
        await basementRoute(gameState.playerName);
        break;
      case "END GAME":
        gameState.endGame = true;
        break;
      case "Closet":
        await closetRoute(gameState.hasKey);
        break;
      case "Attic":
        await atticRoute(gameState.hasAxe);
        break;
      case "Outside":
        await outsideRoute();
        break;
      case "Shed":
        await shedRoute(gameState.hasGun);
        break;
      case "Backyard":
        await backyardRoute(gameState.hasBottle);
        break;
      case "Station":
        await confessionRoute();
        break;
      case "Exterior":
        await exteriorRoute(gameState.playerName);
        break;

      default:
        console.error("No route found for " + gameState.whereToGo);
        break;
    }
  }
  //Ask player where to go
  async function house() {
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
  async function outside() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        { title: "Shed", value: "Shed" },
        { title: "Backyard", value: "Backyard" },
        { title: "END GAME", value: "END GAME" },
      ],
    });
    return response.choice;
  }
  //Ask player where to go
  async function station() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        { title: "Confess", value: "Confess" },
        { title: "END GAME", value: "END GAME" },
      ],
    });
    return response.choice;
  }
  //Ask player where to go
  async function exterior() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        { title: "Pour the gasoline", value: "Pour the gasoline" },
        { title: "END GAME", value: "END GAME" },
      ],
    });
    return response.choice;
  }

  async function askForName() {
    const response = await prompts({
      type: "text",
      name: "playerName",
      message:
        "I suppose it's a bit akward to ask but, do you remember your own name? If so, tell me. What is your name?",
    });
    return response.playerName;
  }
  gameState.playerName = await askForName(); //Save Player Name
  console.log(
    "Hello " +
      gameState.playerName +
      ". It's been some time since we've last spoken. You've gone to great lengths to keep me away."
  );

  //Ask player first question, return, save answer
  async function askPlayerWakeUpQuestion() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you know where you are right now?",
      choices: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    });
    return response.choice;
  }

  await askPlayerWakeUpQuestion(); //Ask first question

  console.log(
    `Somewhere deep in your memories, you vaguely recall this place. This...echo of reality; a whisper of long fragmented memories. 
    You step cautiously onto the rotting wooden porch, the boards creaking beneath your weight as a thick fog coils around your ankles. 
    The house looms before you, its once-proud frame now sagging, the paint peeling in long, curling strips...`
  );
  // await delay(10000);
  console.log(`A single, shattered window gapes like a vacant eye, its jagged edges glinting in the dim, gray light. 
    The front door groans as you push it open, revealing a hallway choked with dust and the scent of damp wood. 
    Faint moonlight filters through gaps in the warped walls, casting twisting shadows. 
    To your left, a strangely ornate but narrow closet door stands firmly shut, a faint scratching noise echoing from within; 
    but whether it's the wind or something else, you can’t be sure...`);

  // await delay(10000);

  console.log(`Ahead, a staircase descends into the basement, its steps disappearing into an abyss of black. 
    The air down there is colder, thick with the metallic tang of old, stagnant water. 
    Something shifts in the darkness below, too faint to see but heavy enough to sense...`);

  // await delay(10000);

  console.log(`Above you, a frayed rope dangles from the ceiling, leading to the attic hatch. 
    A single tug, and the wooden ladder creaks down, releasing a gust of stale air. 
    The attic waits, its rafters lost in shadow, filled with forgotten relics and the weight of something unseen—watching. 
    Everywhere, the house breathes, the walls settling with tired groans, the fog pressing against the windows like ghostly hands...`);
  //await delay(10000);
  console.log("Where would you like to explore?");

  while (gameState.endGame === false) {
    //console.log("haskey", hasKey);

    if (gameState.area === 0) {
      gameState.whereToGo = await house();
    }
    if (gameState.area === 1) {
      gameState.whereToGo = await outside();
    }
    if (gameState.area === 2) {
      gameState.whereToGo = await station();
    }
    if (gameState.area === 3) {
      gameState.whereToGo = await exterior();
    }

    await routes();
  }
  console.log("Game Over");
}

runGame();

//Game needs two different endings, no more than two more areas, use an array
