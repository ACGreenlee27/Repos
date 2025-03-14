import prompts from "prompts";
import { updateKey } from "../../game.js";

export async function basementRoute(playerName) {
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
  //console.log("Player opens door", playerOpensDoor);

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
    // console.log("Player picks up the key", playerPickedUpKey);

    if (playerPickedUpKey === true) {
      updateKey();
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
