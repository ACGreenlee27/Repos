import prompts from "prompts";
import { updateAxe } from "../../game.js";

export async function atticRoute(hasAxe) {
  if (hasAxe === true) {
    console.log("Attic Description");
  } else if (hasAxe === false) {
    console.log(
      "The attic looms above you, a yawning expanse of dread that holds you rooted in place. If only you had a weapon..."
    );
  }
}
