import prompts from "prompts";
import { gameState, updateArea, updateGun } from "../../game.js";

export async function shedRoute() {
  console.log(
    `The shed feels alive with shadows, the door hanging loosely on its hinges like it might give way any second. The air inside is thick and musty, heavy with the smell of rot and oil. You step in, feet sinking into the soft earth beneath, your pulse drumming too loud in your ears. You know what you’re looking for. You know what needs to be done.`
  );
  // await delay(5000);
  console.log(
    `You shuffle through the clutter, your eyes scanning the shelves, your breath shallow. A few empty bottles. Some old cans. Piles of dust that make your skin crawl. But then you see it — a barrel tucked behind a row of rusted tools. The shape, the familiarity of it, sends a jolt through you. The gasoline.`
  );
  // await delay(5000);
  console.log(
    `You reach for it, but then something in the corner catches your attention. A chest. Heavy, old, and chained shut. The chain looks thick and rusted, but still intact, wrapped around the chest like it’s holding something back. Something *important*.`
  );
  // await delay(5000);
  console.log(
    `Your steps are drawn to it before you can think. Your fingers itch to touch the cold metal, the lock staring back at you with its worn edges. You swallow hard, heart racing faster. A strange pull gnaws at your gut, a feeling that the chest holds something you need — something more than just the gasoline.`
  );
  // await delay(5000);
  console.log(
    `But you push the thought aside. The fire. You need the fire. The house is waiting.`
  );
  async function theShed() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message:
        "Take the gas can, " +
        gameState.playerName +
        " you know what you need to do.",
      choices: [
        { title: "Take the gas can. This house needs to go.", value: true },
        { title: "Smash open the lock.", value: false },
      ],
    });
    return response.choice;
  }
  const gasDecision = await theShed();

  if (gasDecision === true) {
    console.log(`You grab the gas can with both hands, the weight of it grounding you for a moment. 
      The metal is cold against your palms, its shape familiar, but the heaviness of what you're about to do settles in your chest. 
      You don’t look back at the shed, not at the chest, not at the lock still glinting in the shadows. 
      The air feels thicker now, pressing against your skin, suffocating. You take a step, and then another, each footfall slow and deliberate, as if the ground itself is resisting you.`);
    // await delay(5000);
    console.log(`The door creaks again as you push it open, the sound like a warning — like something you can’t quite escape. 
      The night outside feels colder now, the trees bending slightly in the breeze, their branches reaching for you like crooked fingers. But you keep moving, eyes fixed ahead.`);
    // await delay(5000);
    console.log(
      `The gasoline sloshes slightly in the can as you walk, the sound too loud in the quiet. Every step seems to echo. You force your mind back to the task — to the fire.`
    );
    updateArea(3);
  }
  if (gasDecision === false) {
    updateGun();
    updateArea(3);

    console.log(`You swing it hard against the lock. The sound of metal striking metal rings out in the silence, the shock vibrating through your arm. 
      The lock shatters, its pieces scattering across the floor in a loud, jagged clatter.`);
    // await delay(5000);
    console.log(`You kneel down, fingers shaking as you pull away the chain, the lid of the chest groaning open. Inside, you see it — an old revolver, worn but well-maintained, nestled against a faded leather holster. 
  Its cold, dark steel seems to absorb the light around it. You hesitate for only a moment, then grab it, slipping it into your pocket. The weight of it there feels solid, final.`);
    // await delay(5000);
    console.log(`You grab the gas can again, the sloshing sound echoing in the stillness. The fire is what you came for, what you need to finish this. With one last glance at the chest — the revolver heavy in your pocket — you turn and leave the shed. 
  The door creaks as it swings shut behind you, the night outside colder than before. The air is thick, almost choking. The house still looms in the distance, waiting. You don’t look back. The only thing that matters now is the fire.`);
  }
}
