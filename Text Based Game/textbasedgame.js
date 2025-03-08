const prompts = require("prompts");

//Create a simplistic text based game

//Ask player for their name
async function runGame() {
  let whereToGo = "";
  let hasKey = false;
  let endGame = false;
  let hasAxe = false;

  async function routes() {
    if (whereToGo === "Basement") {
      console.log(
        "The basement yawns before you, a black pit at the bottom of the stairs, swallowing the last traces of light from the house above. The air is thick here, heavy with the stink of mold, damp earth, and something else—something sharp and metallic, like rust… or blood. You hesitate, but your foot is already on the first step. The wood groans under your weight, the sound stretching unnaturally in the silence. As you descend, the darkness presses closer, swallowing everything beyond the reach of a single, flickering lightbulb hanging from the ceiling. It sways slightly, though there’s no breeze, casting jagged shadows that seem to twitch and recoil at the edges of your vision. Then, at the farthest end of the basement, you see the door. It’s an ugly thing—warped, splintered, scarred with deep gouges, as though something inside had spent years trying to claw its way out. The air feels different here, colder. Heavier. You swallow hard, your eyes tracing the faint imprint where a latch once held firm, but the lock is gone now."
      );
      async function askPlayerToOpenDoor() {
        const response = await prompts({
          type: "select",
          name: "choice",
          message: "Do you want to open the door?",
          choices: [
            { title: "Yes, I have no other choice", value: true },
            //{ title: "No", value: false },
          ],
        });
        return response.choice;
      }
      const playerOpensDoor = await askPlayerToOpenDoor(); //ask player if they want to open door
      console.log("Player opens door", playerOpensDoor);

      if (playerOpensDoor === true) {
        console.log(
          "The room is small—too small. The walls press in close, rough with damp stone, their surfaces slick with a film of moisture that glistens in the dim light. The air is thick, stagnant, carrying the sour stench of decay, as though something had once been left here to rot. The only light comes from a single, low-burning candle perched on a warped wooden table in the center of the room. Its flame flickers violently, as if disturbed by a breath of air, though the space is deathly still. The shadows it casts writhe along the walls, stretching unnaturally, contorting into shapes that don’t quite make sense. Resting in the dust at the center of the table, is a key. It is ornate, gleaming despite the filth around it, its handle shaped into a twisting, curling design that almost resembles grasping fingers."
        );
        async function askPlayerAboutKey() {
          const response = await prompts({
            type: "select",
            name: "choice",
            message: "Do you want to pick up the key?",
            choices: [
              { title: "Yes, it feels familiar...", value: true },
              { title: "No, this feels wrong", value: false },
            ],
          });
          return response.choice;
        }
        const playerPickedUpKey = await askPlayerAboutKey(); //ask player if they want to pick up the key
        console.log("Player picks up the key", playerPickedUpKey);

        if (playerPickedUpKey === true) {
          hasKey = true;
          console.log(
            "The metal is cold when you pick it up—colder than it should be. The teeth of the key are long and jagged, the pattern unsettlingly familiar. It looks as if it would fit the closet upstairs. The moment the thought enters your mind, a soft sound drifts from the darkened corners of the room—a whisper, too faint to understand, yet unmistakably there."
          );
        } else {
          console.log(playerName + " returns to the main hall.");
        }
      } else {
        console.log(playerName + " returns to the main hall.");
      }
    }
    if (whereToGo === "Closet" && hasKey === true) {
      hasAxe = true;
      console.log(
        "The key slides into the lock with an unsettling smoothness, as if it has always belonged there. Your breath catches as you hesitate, fingers tightening around the handle. The air around you seems to shift, thickening, growing heavier with something unseen but unmistakably present. You turn the key. The lock clicks open with a hollow, mechanical finality. The door swings inward, slow and deliberate, revealing nothing but darkness beyond. The air that seeps out is stale, tinged with something coppery and sour. Your fingers fumble along the wall until they find the thin chain of a single hanging lightbulb. You pull. The bulb flickers to life with a buzzing hum. And then you see them. The walls are covered—plastered with yellowing photographs, some curling at the edges, others smeared with something dark. Each image is worse than the last: bodies twisted unnaturally, faces frozen in silent screams, deep gashes carved into pale skin. The same room appears again and again in different angles—a dark but roomy place. Your stomach lurches, but something anchors you in place, something cold and pulsing beneath your ribs. In the center of the closet, positioned like an offering, is a single wooden chair. And resting on the seat, gleaming even under the dim light, is an axe covered in dark stains you dare not question. The handle is worn smooth, the grip molded with the shape of past hands. Without thinking, your fingers curl around it. The weight is perfect. Comfortable. Familiar. A pulse of something dark courses through you. The walls seem closer now, the faces in the photographs staring, watching, waiting. Somewhere in the house, a floorboard creaks."
      );
    } else if (whereToGo === "Closet" && hasKey === false) {
      console.log(
        "You try the handle but the door won't budge. The rustling sound from the recesses of the closet pauses, but soon continues as if you aren't even there."
      );
    }
    if (whereToGo === "Attic" && hasAxe === true) {
      console.log("Attic Description");
    } else if (whereToGo === "Attic" && hasAxe === false) {
      console.log(
        "The attic looms above you, a yawning expanse of dread that holds you rooted in place. If only you had a weapon..."
      );
    }
    if (whereToGo === "END GAME") {
      endGame = true;
      console.log("Goodbye " + playerName);
    }
  }
  async function askForName() {
    const response = await prompts({
      type: "text",
      name: "playerName",
      message: "What is your name?",
    });
    return response.playerName;
  }
  const playerName = await askForName(); //Save Player Name
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
  while (endGame === false) {
    whereToGo = await askPlayerwhereToGo();
    await routes();
  }
}

runGame();
