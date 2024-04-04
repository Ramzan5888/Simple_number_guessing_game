#! /usr/bin/env node

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {name: "userGuessedNumber",
    type: "number",
    message: "Please guess a random number between (1 to 5) ",
},
]);
if(answer.userGuessedNumber === randomNumber ){
    console.log("Congratulation! you Guessed A Right Number");
}else{
    console.log("Oopps! You Guessed A Wrong Number --- Try Again --- ");

};

