function greetPlayer(name) {
  console.log("Welcome, " + name + "!");
}

greetPlayer("AC");

function addPoints(points1, points2) {
  return points1 + points2;
}

let totalPoints = addPoints(10, 20);

//console.log(totalPoints);

function checkScore(score) {
  if (score >= 100) {
    console.log("You won!");
  } else if (score >= 50) {
    console.log("You're halfway there!");
  } else {
    console.log("You need more points!");
  }
}

//checkScore(50);

//turn based combat

let playerHealth = 30;
let enemyHealth = 30;
let isSweepAvailable = true;

function damageModifier() {
  return randomDamage() * 2;
}
function attackPlayer(damage) {
  playerHealth = playerHealth - damage;
  console.log("Player takes " + damage + " damage!");
  console.log("Player health " + playerHealth);
}

function attackEnemy(damage) {
  enemyHealth = enemyHealth - damage;
  console.log("Enemy takes " + damage + " damage!");
  console.log("Enemy health " + enemyHealth);
}

function playerAttack() {
  let damage = damageModifier();
  attackEnemy(damage);
  //playerCriticalHit();
  playerPotionPhase();
}

function enemyAttack() {
  let damage = randomDamage();
  playerBlockAttack();
  attackPlayer(damage);
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
  playerBlockAttack();
}

while (playerHealth > 0 && enemyHealth > 0) {
  takeTurn();
  //playerHealPhase();
  //Game ends when health <= 0
  if (playerHealth <= 0) {
    console.log("Player defeated.");
  } else if (enemyHealth <= 0) {
    console.log("Enemy defeated");
  }
}

//TODO: Write a healing function for both the enemy and the player. Write a block mechanic. Critical hit function.
//If it is a critical hit, do triple damage. Function to use a potion. Write a special attack function: can only be used once per game.
//Function that checks the status of both players (debugger).
//Poison effect, shield, etc.

function playerHealPhase() {
  playerHealthPotion();
}

function playerPotionPhase() {
  //potionOfGreaterHealing();
  playerHealthPotion();
}

function playerHealthPotion() {
  let healthPotion = Math.floor(Math.random() * 5) + 1;
  if (playerHealth >= 1) {
    playerHealth += healthPotion; //add healthPotion to playerHealth
    console.log("Player uses a health potion!");
    console.log("Player health is now " + playerHealth + "!"); //spit out the new total. But how do we calculate how much health was given?
  } else if (playerHealth >= 50) {
    playerHealth = 50;
  }
}

function enemyHealthPotion() {
  let healthPotion = Math.floor(Math.random() * 5) + 1;
  if (enemyHealth >= 1) {
    enemyHealth += healthPotion;
    console.log("Enemy uses a health potion!");
    console.log("Enemy health is now " + healthPotion + "!");
  } else if (enemyHealth >= 30) {
    enemyHealth = 30;
  }
}

function playerBlockAttack() {
  //does not work as intended. come back to this one
  let block = randomDamage() - 5;
  attackPlayer(block);
  console.log("Player blocks!");
  //console.log(block);
}

function playerCriticalHit() {
  let crit = randomDamage() * 3;
  attackEnemy(crit);
  console.log("That's a critical hit! Take " + crit + " extra damage!");
}

function potionOfGreaterHealing() {
  if (playerHealth <= 50) {
    let playerHealth = 100;
    console.log(
      "Player used Potion of Greater Healing! Player health is now 100!"
    );
    //console.log(playerHealth);
  }
}

function playerSweepAttack() {
  if (isSweepAvailable === true) {
    console.log("Player uses Sweep Attack!");
    playerAttack();
    playerAttack();
    playerAttack();
    isSweepAvailable = false;
  }
}

//> Basically same as crit, do something else
// function useGiantStrengthPotion() {
//   let giantStrength = randomDamage() + Math.floor(Math.random() * 20) + 1;
//   attackEnemy(giantStrength);
//   console.log("Player uses Potion of Giant Strength!");
// }
