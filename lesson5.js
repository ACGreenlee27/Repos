//declaring an object uses a variable keyword. Objects have key and value pairs.

let player = {
  name: "Hero",
  health: 200,
  attackPower: 10,
  potions: 3,
  specialAttack: true,
  defense: 5,
  poisonStatus: false,
};

let goblin = {
  name: "Goblin",
  health: 200,
  attackPower: 7,
  potions: 1,
  specialAttack: null,
  defense: 5,
  poisonStatus: false,
  damageResist: 2,
};

let gunman = {
  name: "Gunman",
  health: 200,
  attackPower: 7,
  potions: 1,
  specialAttack: null,
  defense: 5,
  poisonStatus: false,
  damageResist: 3,
};
let thief = {
  name: "Thief",
  health: 200,
  attackPower: 7,
  potions: 1,
  specialAttack: null,
  defense: 5,
  poisonStatus: false,
  damageResist: 5,
};

let dragon = {
  name: "Dragon",
  health: 500,
  attackPower: 20,
  potions: 1,
  specialAttack: null,
  defense: 50,
  poisonStatus: false,
  damageResist: 30,
};

//Status Effects

function inflictPoisonDamage(enemy) {
  for (let i = 0; i < 5; i++) {
    //repeating the damage five times
    enemy.health = enemy.health - 5; //removing five hit points from enemy health
  }
}
function handlePoison(enemy) {
  console.log("handlePoison Test");
  if (enemy.poisonStatus === true) {
    //checks if the enemy poison status is true
    inflictPoisonDamage(enemy); //inflicts poison on the given enemy
  }
  console.log(enemy);
}

function applyPoisonEffect(enemy) {
  enemy.poisonStatus = true; //setting poison flag to true
}

function resetPoisonStatus(enemy) {
  enemy.poisonStatus = false; //setting poison flag to false
}

// applyPoisonEffect(dragon); //applies the poison effect
// handlePoison(dragon); //handles the actual poisoning
// resetPoisonStatus(dragon); //resets status

//Defense Mitigation

// Want to mitigate damage based on defense

//Needs
// 1. Health of the enemies
// 2. Damage being dealt
// 3. Resistance by certain ammount

//flow
// 1. Get the player attack damage
// 2. Get the enemy resistance
// 3. Damage to deal = subtract enemy resistance from player attackPower
// 3.5 Check if player attack power is greater than enemy damage resistance
// 4. Apply damage to enemy by subtracting player attack power from enemy health
// 5. Else tell the player to heck off

function handleMitigation(enemy) {
  console.log("health before", enemy);
  let playerAttackDmg = player.attackPower; //gets player attack damage
  let enemyResistance = enemy.damageResist; //gets enemy damage resistance
  let damageResisted = playerAttackDmg - enemyResistance; //stores the value of players attack damage subtracted from enemy resistance
  if (playerAttackDmg >= enemyResistance) {
    //check if player can even hit the enemy
    enemy.health = enemy.health - damageResisted; // apply damage resisted to enemy health
  } else {
    console.log("Heck off.");
  }
  console.log("health after", enemy);
}

handleMitigation(gunman);

//Modifiers
function damageModifier() {
  return randomDamage() * 2;
}

//Attacks
function attackPlayer(damage) {
  damage = damage - player.defense; //block
  player.health = player.health - damage; //do damage
  console.log("Player takes " + damage + " damage!");
  console.log("Player health " + player.health);
}

function attackGoblin(damage) {
  damage = damage - goblin.defense;
  let critChanceSuccess = critChance();
  if (critChanceSuccess === true) {
    damage = damage * 3;
  }
  goblin.health = goblin.health - damage;
  console.log("Enemy takes " + damage + " damage!");
  console.log("Enemy health " + goblin.health);
}

function attackGunman(damage) {
  damage = damage - gunman.defense;
  let critChanceSuccess = critChance();
  if (critChanceSuccess === true) {
    damage = damage * 3;
  }
  gunman.health = gunman.health - damage;
  console.log("Enemy takes " + damage + " damage!");
  console.log("Enemy health " + gunman.health);
}

function attackThief(damage) {
  damage = damage - thief.defense;
  let critChanceSuccess = critChance();
  if (critChanceSuccess === true) {
    damage = damage * 3;
  }
  thief.health = thief.health - damage;
  console.log("Enemy takes " + damage + " damage!");
  console.log("Enemy health " + thief.health);
}

function attackDragon(damage) {
  damage = damage - dragon.defense;
  let critChanceSuccess = critChance();
  if (critChanceSuccess === true) {
    damage = damage * 3;
  }
  dragon.health = dragon.health - damage;
  console.log("Enemy takes " + damage + " damage!");
  console.log("Enemy health " + dragon.health);
}

function playerAttack() {
  attackGoblin(player.attackPower);
}

function enemyAttack() {
  attackPlayer(goblin.attackPower);
}

function randomDamage() {
  return Math.floor(Math.random() * 10) + 1; //gives random damage between 1 and 10
}

function takeTurn() {
  //One complete turn means both players have attacked
  console.log("Player's turn.");
  playerAttack();
  //playerSweepAttack();
  console.log("Enemy's turn.");
  enemyAttack();
}

function playerHealPhase() {
  playerHealthPotion();
}

function playerPotionPhase() {
  //potionOfGreaterHealing();
  playerHealthPotion();
}

function playerHealthPotion() {
  let healthPotion = Math.floor(Math.random() * 5) + 1;
  if (player.health >= 1) {
    player.health += healthPotion; //add healthPotion to playerHealth
    console.log("Player uses a health potion!");
    console.log("Player health is now " + player.health + "!"); //spit out the new total. But how do we calculate how much health was given?
  } else if (player.health >= 50) {
    player.health = 50;
  }
}

function critChance() {
  let critChance = Math.random() * 100;
  if (critChance < 50) {
    return true;
  }
  return false;
}

function playerSweepAttack() {
  if (player.specialAttack === true) {
    console.log("Player uses Sweep Attack!");
    playerAttack();
    playerAttack();
    playerAttack();
    player.specialAttack = false;
  }
}

// while (player.health > 0 && goblin.health > 0) {
//   takeTurn();
//   //playerHealPhase();
//   //Game ends when health <= 0
//   if (player.health <= 0) {
//     console.log("Player defeated.");
//   } else if (goblin.health <= 0) {
//     console.log("Enemy defeated");
//   }
// }

//Create 3 new enemies, one of them is a unique dragon. The dragon has its own special attack. Defense and mitigation for the enemies. Poison effect applied to the enemies.
// Enemies should have some sort of status (after each turn they lose more health). Dragon has a burn tick.

//Bonus: Fight the enemies one after the other. Start with first enemy, end with dragon.

//Make a rock paper scissors game

// 30 minutes to an hour a day
// 15 min video about coding
