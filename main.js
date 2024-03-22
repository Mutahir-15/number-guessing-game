#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1 - 10:",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations!!! you have Guessed the Right number.");
}
else {
    console.log("Oops!! You Have Guessed the wrong Number.");
}
