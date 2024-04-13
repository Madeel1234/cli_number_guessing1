#!/user/bin/env node

import inquirer from "inquirer"

// Computer will generate a random number
// User input for guessing number
// compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()*2);
const answers = await inquirer.prompt([
    {

        name: "userguessedNumber",
        type: "number",
        message: "Please guess a number",

  },
]);
if (answers.userguessedNumber === randomNumber){
    console.log("congratulations! You guessed right number ")
}else{
console.log("You guessed wrong number.")
}




