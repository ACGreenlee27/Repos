import prompts from "prompts";
import { gameState, delay, updateGameOver } from "../../game.js";

export async function confessionRoute() {
  console.log(
    `The engine clicks as it cools, the soft ticking noise louder than it should be in the suffocating silence of the car. Your hands are still wrapped tight around the steering wheel, knuckles pale, fingers trembling. You haven’t moved in minutes. Maybe hours. Time feels thin, stretched, like plastic wrap you could tear through if you just leaned forward — but you can’t. Not yet.`
  );
  await delay(5000);
  console.log(
    `The police station sits across the street, bathed in too-bright fluorescent light that hums through the night. The glass doors reflect everything but seem to swallow you whole at the same time. People move inside — uniforms, paperwork, tired faces — and you can almost hear the low murmur of voices from here. You should be one of those voices. You should already be inside.`
  );
  await delay(5000);
  console.log(
    `But your heart won’t stop hammering, your chest tight and hollow all at once. The words you practiced on the drive here dissolve the second you try to speak them out loud. You murdered them. Your family. Those words don’t belong in your mouth. They sit like stones on your tongue, choking you.`
  );
  async function askPlayerToConfess() {
    const response = await prompts({
      type: "select",
      name: "choice",
      message: "Do you want to confess?",
      choices: [
        { title: "Yes, I know what I need to do.", value: true },
        //{ title: "No", value: false },
      ],
    });
    return response.choice;
  }

  const playerConfessed = await askPlayerToConfess();

  if (playerConfessed === true) {
    console.log(
      `You push the car door open. The night air hits you like ice, sharp and sobering. Your legs feel stiff, heavy, but they move — one step, then another, gravel crunching beneath your shoes like bones breaking. The station looms closer with each breath, the lights harsh against your eyes. The weight in your chest only grows.`
    );
    await delay(5000);

    console.log(
      `The glass doors part with a soft whoosh, and warmth rushes out to meet you. It doesn’t comfort. It suffocates. The scent of old coffee, paper, disinfectant. The hum of fluorescent lights above. Conversations murmur in the distance, phones ringing. The normalcy of it all presses down on you like a weight you can’t carry.`
    );
    await delay(5000);

    console.log(
      `The front desk is only a few feet away, but the walk feels endless. The clerk looks up, eyes tired, polite smile already forming — until they meet yours. The smile falters. You feel your throat tighten, dry and raw.`
    );
    await delay(5000);

    console.log(
      `You stop in front of the counter. Your heart slams in your ears, drowning out everything. The blood on your sleeves feels like fire against your skin. You try to swallow, but your mouth is too dry.`
    );
    await delay(5000);

    console.log(`The clerk’s voice is soft. Can I help you?`);
    await delay(5000);

    console.log(
      `You open your mouth. No words come. Your chest is hollow. Empty.`
    );
    await delay(5000);

    console.log(
      `You force the words out. They scrape your throat like broken glass.`
    );
    await delay(5000);

    console.log(`I killed them.`);
    await delay(5000);

    console.log(`The world tilts for a second. The room goes silent.`);
    await delay(5000);

    console.log(`My family, you whisper, barely audible.`);
    await delay(5000);

    console.log(
      `The clerk stares at you, blinking slowly, processing. The moment stretches too long.`
    );
    await delay(5000);

    console.log(`You lower your head.`);
    await delay(5000);

    console.log(`I need to turn myself in.`);
    await delay(5000);

    console.log(
      `The silence between you and the clerk stretches, thick and unbearable. Their eyes flick down to your stained sleeves, then back to your face. You see it happen — the polite mask dropping, replaced with something colder, sharper.`
    );
    await delay(5000);

    console.log(
      `Stay right here, they say, voice carefully measured, but you can hear the edge beneath it.`
    );
    await delay(5000);

    console.log(
      `They press a button beneath the counter. A soft click echoes louder than it should.`
    );
    await delay(5000);

    console.log(
      `Your heart pounds in your chest, thudding so loud you wonder if they can hear it. You force yourself to breathe, but each breath feels thin, shaky, like it won’t be enough.`
    );
    await delay(5000);

    console.log(
      `Two officers appear from the hallway, their steps quick, deliberate. One’s hand rests lightly on their holster. The other speaks softly, but the command is clear.`
    );
    await delay(5000);

    console.log(`Hands where we can see them.`);
    await delay(5000);

    console.log(
      `You lift your hands slowly, palms trembling. The axe isn’t with you. The blood is enough.`
    );
    await delay(5000);

    console.log(`Step back, one of them says. You obey, feet dragging.`);
    await delay(5000);

    console.log(
      `They approach cautiously, eyes flicking between you and each other.`
    );
    await delay(5000);

    console.log(`Tell us exactly what happened, the first officer says.`);
    await delay(5000);

    console.log(
      `You try to speak, but your mouth is dry, your throat tight. You force the words out.`
    );
    await delay(5000);

    console.log(
      `I... I killed them. My family. In the house. I... I couldn’t stop.`
    );
    await delay(5000);

    console.log(`The officers exchange a glance.`);
    await delay(5000);

    console.log(
      `The second officer’s voice softens, but it only makes it worse.`
    );
    await delay(5000);

    console.log(`Are they still in the house?`);
    await delay(5000);

    console.log(`You nod, eyes burning.`);
    await delay(5000);

    console.log(
      `They guide you to a bench against the wall. One of them cuffs your wrists, the cold steel biting into your skin.`
    );
    await delay(5000);

    console.log(
      `You’re going to sit right here, the first officer says. Don’t move.`
    );
    await delay(5000);

    console.log(`They step away, speaking into radios, low and urgent.`);
    await delay(5000);

    console.log(
      `You sit on the hard bench, the cuffs heavy, unforgiving. The fluorescent lights buzz louder than before.`
    );
    await delay(5000);

    console.log(`You stare at the floor. You can’t lift your head.`);

    updateGameOver();
  }
}
