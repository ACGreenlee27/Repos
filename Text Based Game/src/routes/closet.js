import prompts from "prompts";
import { delay, updateAxe } from "../../game.js";

export async function closetRoute(hasKey) {
  if (hasKey === true) {
    updateAxe();
    console.log(
      `The key slides into the lock with an unsettling smoothness, as if it has always belonged there. 
      Your breath catches as you hesitate, fingers tightening around the handle.`
    );

    await delay(5000);

    console.log(`The air around you seems to shift, thickening, growing heavier with something unseen but unmistakably present. 
      You turn the key. The lock clicks open with a hollow, mechanical finality.`);
    await delay(5000);
    console.log(`The door swings inward, slow and deliberate, revealing nothing but darkness beyond. 
      The air that seeps out is stale, tinged with something coppery and sour.`);
    await delay(5000);
    console.log(
      `Your fingers fumble along the wall until they find the thin chain of a single hanging lightbulb.`
    );
    await delay(2000);
    console.log("You pull.");
    await delay(2000);
    console.log(`The bulb flickers to life with a buzzing hum.`);
    await delay(2000);
    console.log(`And then you see them.`);
    await delay(2000);

    console.log(`The walls are covered—plastered with yellowing photographs, some curling at the edges, others smeared with something dark. 
        Each image is worse than the last: bodies twisted unnaturally, faces frozen in silent screams, deep gashes carved into pale skin. 
        The same room appears again and again in different angles—a dark but roomy place.`);
    await delay(5000);
    console.log(`Your stomach lurches, but something anchors you in place, something cold and pulsing beneath your ribs. 
        In the center of the closet, positioned like an offering, is a single wooden chair.`);
    await delay(5000);
    console.log(
      `And resting on the seat, gleaming even under the dim light, is an axe covered in dark stains you dare not question.`
    );
    await delay(5000);
    console.log(`The handle is worn smooth, the grip molded with the shape of past hands. Without thinking, your fingers curl around it. 
        The weight is perfect. Comfortable. Familiar. A pulse of something dark courses through you.`);
    await delay(5000);
    console.log(
      `The walls seem closer now, the faces in the photographs staring, watching, waiting. Somewhere in the house, a floorboard creaks.`
    );
    await delay(5000);
  } else if (hasKey === false) {
    console.log(
      "You try the handle but the door won't budge. The rustling sound from the recesses of the closet pauses, but soon continues as if you aren't even there."
    );
    await delay(5000);
  }
}
