import prompts from "prompts";
import { gameState, updateGameOver, delay, typeWriter } from "../../game.js";

export async function exteriorRoute() {
  await typeWriter(
    `You stumble back to the house with one singular goal in mind: ending this nightmare. You’re shaking so hard the gas can jerks in your hand, sloshing heavy liquid over your boots. 
    You don’t care. 
    You can’t care. 
    The smell is thick, dizzying, choking your throat — but not more than the fear clamping around your chest like iron bands...`
  );
  await delay(5000);
  await typeWriter(
    `You stumble over the cracked porch steps, heart hammering so loud you think the rotted walls can hear it. 
    The house groans around you, ancient wood flexing, sighing, whispering things you don’t want to understand. 
    You hiss through your teeth, teeth clenched so tight your jaw aches...`
  );
  await delay(5000);
  await typeWriter(
    `You douse the front door. You spray it down like holy water. The gasoline glistens on warped wood, running in little rivulets down the threshold like blood...`
  );
  await delay(5000);
  await typeWriter(
    `Your breath is ragged. Your hand aches from gripping the handle, but you won’t stop. You round the corner. 
    The windows glare at you, black and gleaming. Your reflection is a ghost in their glass...`
  );
  await delay(5000);
  await typeWriter(
    `You slash gasoline across the broken shutters, down the moss-eaten siding. You slip in the mud but catch yourself on trembling legs. 
    You can feel it watching. Inside. Pressed against the walls, listening. Waiting...`
  );

  await delay(5000);
  await typeWriter(
    `Your hands are wet — with sweat, with gas, you don’t know. You can’t stop shaking. You scream. 
    A raw, broken sound. You fling the rest of the gasoline at the house, splash it against the foundation like acid. The can clatters onto the gravel...`
  );

  await delay(5000);
  await typeWriter(
    `You fumble the lighter. Your hands are slick and clumsy and shaking. You curse, knees giving out, collapsing onto the wet dirt, gas fumes making your head swim...`
  );

  await delay(5000);
  await typeWriter(`The lighter sparks.`);

  await delay(5000);
  await typeWriter(`The house groans — long and low and hungry.`);

  await delay(5000);
  await typeWriter(`You swallow back a sob and light the flame.`);
  await delay(5000);
  await typeWriter(`You hurl it.`);
  await delay(5000);
  await typeWriter(`The world erupts.`);
  await delay(5000);
  await typeWriter(
    `Fire crawls fast and violent up the old wood, shrieking alive, and for a second — just one second — you think you hear it scream. 
    With a whoosh, the house is completely engulfed in flames. Taking with it the evidence of your crimes.`
  );

  async function exteriorChoice() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message:
        "Are you satisfied with what you've done, " +
        gameState.playerName +
        "?",
      choices: [
        {
          title: "Yes, I did what I had to! I did what YOU told me to.",
          value: 1,
        },
        {
          title: "No, I regret everything. Why did you make me do this?",
          value: 2,
        },
        {
          title: "I don't know how to feel.",
          value: 3,
        },
      ],
    });
    return response.choice;
  }

  const endingPath1 = await exteriorChoice();

  if (gameState.hasBottle === true && endingPath1 === 2) {
    await typeWriter(
      `The fire roars louder than you thought fire could. A violent, living thing, crackling and snarling, spitting sparks into the night. 
      You stumble back, your breath ripping out of you in ragged sobs.`
    );
    await delay(5000);
    await typeWriter(`And then —You hear it `);
    await delay(5000);
    await typeWriter(`The scream. Not ITS scream.`);
    await delay(5000);
    await typeWriter(
      `A scream you know. A scream that rips straight through bone and nerve, familiar and human and terrified.`
    );
    await delay(5000);
    await typeWriter(`You freeze.`);
    await delay(5000);
    await typeWriter(
      `More screams now, overlapping, shrill and broken and REAL.`
    );
    await delay(5000);
    await typeWriter(
      `You spin. The flames aren’t eating old, rotted wood. They’re devouring vinyl siding. White paint. The porch swing. The bike by the front steps.`
    );
    await delay(5000);
    await typeWriter(`You know that bike.`);
    await delay(5000);
    await typeWriter(`You know those voices.`);
    await delay(5000);
    await typeWriter(
      `You stumble forward, gas fumes still thick in your nose, but your mind — your mind is tearing apart at the seams. 
      You see the front door, burning alive, and through it — faces pressed to glass. Eyes wide. Hands pounding.`
    );
    await delay(5000);
    await typeWriter(`They’re calling for YOU.`);
    await delay(5000);
    await typeWriter(
      `You scream their names until your throat shreds. The fire eats faster.`
    );
    await delay(5000);
    await typeWriter(
      `One of the smaller figures collapses in the windowframe, arms flailing before they vanish into the orange heat. 
      Another voice — higher, ragged, pleading — cuts through the crackling, a voice you’ve kissed goodnight a thousand times, a voice that used to laugh and call your name — now screaming it like a curse.`
    );
    await delay(5000);
    await typeWriter(
      `Your legs give out. You fall to your knees on the wet grass, gas fumes and fire smoke choking you into dry heaves. 
      Your vision twists. The house blurs and shifts and it’s not old, it’s not rotted, it’s your house, it’s always been your house —`
    );
    await delay(5000);
    await typeWriter(`You did this.`);
    await delay(5000);
    await typeWriter(`You did this.`);
    await delay(5000);
    await typeWriter(`You DID this.`);
    await delay(5000);
    await typeWriter(`They’re still screaming. You can’t stop hearing them.`);
    await delay(5000);
    await typeWriter(
      `And somewhere in your mind, a voice — too calm, too cold — whispers:`
    );
    await delay(5000);
    await typeWriter(`It was always you...`);
    await delay(20000);
    await typeWriter(`It was always just you.`);
    await delay(5000);
    await typeWriter(
      `The fire is a wall of sound now — screaming wood, shrieking glass, and those voices, those *voices* — cracking and fading one by one into wet, choking gasps. 
      You’re crawling forward without realizing, clawing the ground, nails tearing into dirt and roots. But the heat blasts you back. You can’t get close. You can’t reach them. You’ll never reach them. The air is poison. Smoke and gasoline and burning flesh. You cough until you taste blood. And then — your hand brushes something cold in the grass. You blink through tears, through heat distortion. The little orange bottle. You remember finding it earlier, half-buried near the shed. The little label with your name on it now just a smear of faded letters. You thought it was strange. You thought maybe THEY left it for you. But there was no THEY. There was only YOU`
    );
    await delay(5000);
    await typeWriter(
      `You stare at the bottle. Your breath shudders. The fire pops loud, a support beam splitting, sending up sparks like fireworks. Another scream, cut short. 
      Your stomach twists. You double over and dry heave until you taste bile. The bottle is still in your hand. Your fingers tremble as you pop the cap off. White pills spill into your palm. You stare at them for half a second, a flickering instant where you almost don’t move. Then you tip your head back and pour them into your mouth. All of them. They’re bitter and dry and catch in your throat. You swallow hard, gagging, clawing at your neck, forcing them down. You drink from the garden hose, still running from when you filled the gas can. The water is freezing and tastes like metal. You don’t care. You choke it all down.`
    );
    await delay(5000);
    await typeWriter(
      `You sit there on the cold ground, face lit orange by the blaze, and wait for it to start. Your head swims. 
      The screams are gone now. Only the crackling remains. 
      You press your forehead into the dirt, fists clenched, heart racing so fast it feels like it’s trying to escape your chest. 
      And you whisper, one last time, into the smoke: “I’m sorry.”`
    );

    updateGameOver();
    return;
  }
  if (gameState.hasBottle === false && endingPath1 === 1) {
    await typeWriter(
      `The fire roars louder than you thought fire could. A violent, living thing, crackling and snarling, spitting sparks into the night. 
      You stumble back, your breath ripping out of you in ragged sobs.`
    );
    await delay(5000);
    await typeWriter(`And then —You hear it `);
    await delay(5000);
    await typeWriter(`The scream. Not ITS scream.`);
    await delay(5000);
    await typeWriter(
      `A scream you know. A scream that rips straight through bone and nerve, familiar and human and terrified.`
    );
    await delay(5000);
    await typeWriter(`You freeze.`);
    await delay(5000);
    await typeWriter(
      `More screams now, overlapping, shrill and broken and REAL.`
    );
    await delay(5000);
    await typeWriter(
      `You spin. The flames aren’t eating old, rotted wood. They’re devouring vinyl siding. 
      White paint. The porch swing. The bike by the front steps.`
    );
    await delay(5000);
    await typeWriter(`You know that bike.`);
    await delay(5000);
    await typeWriter(`You know those voices.`);
    await delay(5000);
    await typeWriter(
      `You stumble forward, gas fumes still thick in your nose, but your mind — your mind is tearing apart at the seams. 
      You see the front door, burning alive, and through it — faces pressed to glass. Eyes wide. Hands pounding.`
    );
    await delay(5000);
    await typeWriter(`They’re calling for YOU.`);
    await delay(5000);
    await typeWriter(
      `You scream their names until your throat shreds. The fire eats faster.`
    );
    await delay(5000);
    await typeWriter(
      `One of the smaller figures collapses in the windowframe, arms flailing before they vanish into the orange heat. 
      Another voice — higher, ragged, pleading — cuts through the crackling, a voice you’ve kissed goodnight a thousand times, a voice that used to laugh and call your name — now screaming it like a curse.`
    );
    await delay(5000);
    await typeWriter(
      `Your legs give out. You fall to your knees on the wet grass, gas fumes and fire smoke choking you into dry heaves. 
      Your vision twists. The house blurs and shifts and it’s not old, it’s not rotted, it’s your house, it’s always been your house —`
    );
    await delay(5000);
    await typeWriter(`You did this.`);
    await delay(5000);
    await typeWriter(`You did this.`);
    await delay(5000);
    await typeWriter(`You DID this.`);
    await delay(5000);
    await typeWriter(`They’re still screaming. You can’t stop hearing them.`);
    await delay(5000);
    await typeWriter(
      `And somewhere in your mind, a voice — too calm, too cold — whispers:`
    );
    await delay(5000);
    await typeWriter(`It was always you.`);
    await delay(5000);
    await typeWriter(`It was always just you...`);
    await delay(10000);
    await typeWriter(`As the flames grow taller before you, the distant sound of sirens draw your attention. 
        The police and fire services rush down the long driveway of the once pristine home you built with your family.`);
    updateGameOver();
    return;
  }
  if (gameState.hasGun === true && endingPath1 === 3) {
    await typeWriter(
      "Remembering the gun in your pocket, your trembling hand caresses the fabric separating you from your final decision. End it, " +
        gameState.playerName +
        "."
    );
    await typeWriter(`It was always you.`);
    await delay(5000);
    await typeWriter("End it.");
    await typeWriter(`It was always you...`);
    await delay(20);
    await typeWriter("End it.");
    updateGameOver();
    return;
  }

  await typeWriter(
    "Who are you speaking to, " +
      gameState.playerName +
      "? I'm only a figment of your imagination."
  );
  updateGameOver();
  return;
}
