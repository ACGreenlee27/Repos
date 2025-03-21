import prompts from "prompts";
import { delay, updateArea, updateAxe } from "../../game.js";
import { gameState } from "../../game.js";

export async function atticRoute(hasAxe) {
  if (hasAxe === true) {
    updateArea(1);
    console.log(
      `Clutching the axe in one hand, your fingers tremble as you grasp the frayed rope hanging from the ceiling. 
      With a hesitant pull, the attic hatch groans open, releasing a breath of stale, cold air that seeps into your skin.`
    );
    await delay(5000);
    console.log(`The wooden ladder creaks beneath your weight, each step upward swallowed by the thick, suffocating darkness above. 
      Dust drifts down like dead snow, settling in your hair, your lungs, your bones.`);
    await delay(5000);
    console.log(`As your head rises past the threshold, the dim glow of a single, flickering bulb struggles against the shadows. 
      The attic is a cavern of forgotten things—moth-eaten furniture draped in sheets, warped crates stacked like gravestones, the skeletal remains of a rocking chair frozen mid-motion. 
      The air reeks of decay, something sour and coppery curling at the edges of your senses. Then, your eyes land on the table.`);
    await delay(5000);
    console.log(
      `A platter sits at its center, tarnished silver reflecting the weak light. And on it—a severed head. Your breath falters.`
    );
    await delay(5000);
    console.log(`The face is twisted in an expression of terror, mouth slack, eyes wide and unseeing. But it’s not just any face. 
      You know this face. It is burned into your memory, into your past.`);
    await delay(5000);
    console.log(
      `The recognition slams into you like a physical blow, nausea twisting your stomach.`
    );
    await delay(5000);
    console.log(
      `Your gaze flickers away, desperate to escape the sight, but lands on something worse.`
    );
    await delay(5000);
    console.log(`Scattered across the attic floor, brittle with age, are yellowed news clippings. 
      The headlines scream at you in bold, black ink:`);
    await delay(2000);
    console.log(
      `LOCAL FAMILY MURDERED IN GRISLY HOME SLAUGHTER. KILLER NEVER CAUGHT—IS THE HOUSE CURSED? BODIES NEVER FOUND.`
    );
    await delay(5000);
    console.log(
      `You scan the articles with growing horror, your breath coming faster. The dates. The names. The faces. They belong to them. To you...`
    );
    await delay(2000);
    console.log(
      `The gnarled faces of your flesh and blood stare back at you, the heavy sound of your breathing filling the air like a thick cloud as you clutch the axe in your hands.`
    );
    await delay(2000);
    console.log("What have you done " + gameState.playerName + "?");
    await delay(5000);
    async function givePlayerEndingOption() {
      const response = await prompts({
        type: "select",
        name: "choice",
        message: "Do you know what needs to be done?",
        choices: [
          {
            title:
              "Yes, I need to get rid of the evidence. I need to burn this place to the ground.",
            value: true,
          },
          {
            title: "Yes, I need to call the police. I need help.",
            value: false,
          },
        ],
      });
      return response.choice;
    }

    const endingChoice = await givePlayerEndingOption();
    if (endingChoice === true) {
      updateArea(1);
      console.log(
        `Your mind goes to the shed. You don't know how, but you know there's gasoline there..`
      );
      await delay(2000);
      console.log(
        `You move toward the stairs, your boots creaking loudly against the old wood, and make your way down into the dark hallway..`
      );
      await delay(2000);
      console.log(
        ` Every step feels like the house is pulling you deeper, like it knows what you’re about to do. You reach the door that leads outside..`
      );
      await delay(2000);
      console.log(`The wood is cold beneath your hand as you turn the knob.`);
      await delay(2000);
    }
    if (endingChoice === false) {
      updateArea(2);

      console.log(
        `The weight of it all presses down on you as you stand there, the cold air cutting through your clothes, biting at your skin.`
      );
      await delay(2000);
      console.log(
        ` The axe, still heavy in your grip, feels like an anchor now — something that’s holding you in place, keeping you from sinking into the abyss. You know what you’ve done.`
      );
      await delay(2000);
      console.log(
        ` There’s no denying it. It’s all in your hands, in the blood, in the silence that follows you wherever you go.`
      );
      await delay(2000);
      console.log(
        ` The house around you seems to grow even darker, its windows black like empty eyes, watching, waiting. But you can’t stay here. You can’t keep pretending.`
      );
      await delay(2000);
      console.log(`With resolve in your gut, you leave the attic.`);
    }
  } else if (hasAxe === false) {
    console.log(
      "The attic looms above you, a yawning expanse of dread that holds you rooted in place. If only you had a weapon..."
    );
    await delay(2000);
  }
}
