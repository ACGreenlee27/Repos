import prompts from "prompts";
import { updateAxe } from "../../game.js";
import { playerName } from "../../game.js";
import { endGame } from "../../game.js";
import { updateGameOver } from "../../game.js";

export async function atticRoute(hasAxe) {
  if (hasAxe === true) {
    updateGameOver();
    console.log(
      "Clutching the axe in one hand, your fingers tremble as you grasp the frayed rope hanging from the ceiling. With a hesitant pull, the attic hatch groans open, releasing a breath of stale, cold air that seeps into your skin. The wooden ladder creaks beneath your weight, each step upward swallowed by the thick, suffocating darkness above. Dust drifts down like dead snow, settling in your hair, your lungs, your bones. As your head rises past the threshold, the dim glow of a single, flickering bulb struggles against the shadows. The attic is a cavern of forgotten things—moth-eaten furniture draped in sheets, warped crates stacked like gravestones, the skeletal remains of a rocking chair frozen mid-motion. The air reeks of decay, something sour and coppery curling at the edges of your senses. Then, your eyes land on the table. A platter sits at its center, tarnished silver reflecting the weak light. And on it—a severed head. Your breath falters. The face is twisted in an expression of terror, mouth slack, eyes wide and unseeing. But it’s not just any face. You know this face. It is burned into your memory, into your past. The recognition slams into you like a physical blow, nausea twisting your stomach. Your gaze flickers away, desperate to escape the sight, but lands on something worse. Scattered across the attic floor, brittle with age, are yellowed news clippings. The headlines scream at you in bold, black ink: LOCAL FAMILY MURDERED IN GRISLY HOME SLAUGHTER. KILLER NEVER CAUGHT—IS THE HOUSE CURSED? BODIES NEVER FOUND. You scan the articles with growing horror, your breath coming faster. The dates. The names. The faces. They belong to them. To you."
    );
    console.log(
      "Killer identified. Do you know your neighbors " + playerName + "?"
    );
  } else if (hasAxe === false) {
    console.log(
      "The attic looms above you, a yawning expanse of dread that holds you rooted in place. If only you had a weapon..."
    );
  }
}
