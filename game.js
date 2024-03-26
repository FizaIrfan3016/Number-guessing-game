#! /usr/bin.env node
import inquirer from "inquirer";
console.log("\n Welcome to FIcode - Cli Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number (number limit from 1-5)",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations ! your guessed is correct.");
}
else {
    console.log("Sorry you guessed a wrong number.");
}
