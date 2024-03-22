import inquirer from "inquirer";
// computer will generate  a random number
//user input for guessing number
//campare user input with computer generate number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number",
    },
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation you guest right number");
}
else {
    console.log("you guess wrong number.");
}
