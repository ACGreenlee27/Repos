import prompts from "prompts";
import { gameState, updateBottle } from "../../game.js";

export async function backyardRoute() {
  await typeWriter(`The wind brushes the back of your neck, cold and damp, like breath. You tell yourself it’s nothing. 
    Just air. Just night. 
    But you can’t stop glancing over your shoulder. The house behind you looms quiet and still, but the backyard... it feels wrong.`);
  await delay(5000);
  await typeWriter(`You stand there too long on the porch steps, the wood creaking under your weight like bones bending. 
  The dark grass ripples. The trees sway. But it’s that gap between the hedges — that too-dark sliver of space — that pulls at you. 
  Like a whisper curling around your ankle, tugging you forward.`);
  await delay(5000);
  await typeWriter(`Your hand tightens on the flashlight. It feels too light, too fragile, useless against the weight in your chest. 
  You swallow hard and step off the porch. Gravel crunches sharp under your shoes, loud in the hush.`);
  await delay(5000);
  await typeWriter(
    `You tell yourself: I just need to look. Just one look. Just make sure nothing’s there. But the pit in your stomach knows better.`
  );

  await typeWriter(
    `Through the darkness you can just barely make out what look like...graves. Graves? Open pits hastily dug in the soft soil...`
  );

  async function visitBackyard() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you want to visit the backyard?",
      choices: [
        { title: "Yes, I'll take a closer look.", value: true },
        { title: "No, I don't have time for this.", value: false },
      ],
    });
    return response.choice;
  }
  const visitTheBackyard = await visitBackyard();

  async function askPlayerBackyardQuestion() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Would you like to get closer?",
      choices: [
        { title: "Yes, I need to know what's going on here.", value: true },
        { title: "No, I said I have no time for this!", value: false },
      ],
    });
    return response.choice;
  }

  const playerBackyardChoice = await askPlayerBackyardQuestion();

  if (playerBackyardChoice === true) {
    updateBottle();
    //await typeWriter(gameState.hasBottle, "has bottle");
    await typeWriter(`You step closer, heart pounding so hard it rattles your ribs. The night air feels thick, pressing against your skin, heavy and suffocating. 
      The ground under your feet softens, damp and uneven. You feel it give slightly — freshly disturbed earth.`);
    await delay(5000);

    await typeWriter("You freeze.");
    await delay(5000);

    await typeWriter(
      `Graves. Three of them. Shallow, haphazard. The soil piled in rough mounds, still dark and wet, like it hasn’t had time to settle.`
    );
    await delay(5000);

    await typeWriter(
      `Your breath comes shallow and fast. Your stomach twists into a tight, sick knot.`
    );
    await delay(5000);

    await typeWriter(`Something catches your eye near the edge of the nearest grave. Half-buried in the soil, plastic glinting faintly in the moonlight. 
  You crouch slowly, your knees trembling, fingers digging into the cold dirt. The object comes loose with a soft pull.`);
    await delay(5000);

    await typeWriter("A pill bottle.");
    await delay(5000);

    await typeWriter(`You wipe the grime away with shaking fingers. 
  Your name stares back at you. Clear. Unmistakable.`);
    await delay(5000);

    await typeWriter("Antipsychotics.");
    await delay(5000);

    await typeWriter(`You stare at it too long. The world feels too loud, too close. 
  Your pulse thunders in your ears.`);
    await delay(5000);

    await typeWriter("You slide the bottle into your pocket.");
    await delay(5000);

    await typeWriter("The graves sit silent. Waiting.");
    await delay(5000);
  }
  if (playerBackyardChoice === false) {
    await typeWriter(gameState.playerName + " leaves the backyard.");
  }
}
