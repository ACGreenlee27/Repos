const prompts = require("prompts");

//Function template.
// (async () => {
//   const response = await prompts({
//     type: "text",
//     name: "meaning",
//     message: "What is the meaning of life?",
//   });
//   // console.log(response.meaning);
// })();

async function askQuestion() {
  const response = await prompts({
    type: "text",
    name: "meaning",
    message: "What is the meaning of life?",
  });

  const userAnswer = response.meaning;

  const response2 = await prompts({
    type: "text",
    name: "age",
    message: "How old?",
  });

  const userAge = response2.age;
}
//askQuestion();

//Ask users age

function verifyAge(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

async function askForAge() {
  const response = await prompts({
    type: "text",
    name: "age", //made up name to store our users answer
    message: "How old are you?",
  });

  const age = response.age; // user input

  //console.log("user inputted", age);

  const isOlderThan21 = verifyAge(age);

  if (isOlderThan21 === true) {
    console.log("You're old enough, welcome.");
  } else {
    console.log("You're a child go away.");
  }
}
//askForAge();

async function creditForm() {
  const response = await prompts({
    type: "select",
    name: "homeOwnerStatus",
    message: "Do you currently own a home?",
    choices: [
      { title: "Yes", value: true },
      { title: "No", value: false },
    ],
  });

  const isOwner = response.homeOwnerStatus;
  console.log(isOwner);

  {
    const continueProcess = await prompts({
      type: "select",
      name: "continued",
      message: "Would you like to continue with the application process?",
      choices: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    });
    const creditPhase = continueProcess.continued;
    console.log(creditPhase);
    if (creditPhase === true) {
      const creditScoreResponse = await prompts({
        type: "number",
        name: "score",
        message: "What is your current credit score?",
      });

      const creditScore = creditScoreResponse.score;

      console.log("Credit Score", creditScore);

      if (creditScore >= 600) {
        console.log(
          "Your credit score meets or exceeds the miniumum threshold. A representative will reach out shortly."
        );
      } else {
        console.log(
          "Your credist score does not meet the minimum threshold. Please reapply at a later date."
        );
      }
    } else {
      console.log("Thank you, have a nice day!");
    }
  }
}
creditForm();
