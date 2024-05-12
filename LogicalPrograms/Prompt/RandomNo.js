import Prompt from "prompt-sync";

const prompt = Prompt()

// const random = Math.floor(Math.random()*(100-1)+1)
// // const random = Math.random()*(10-1)+1
// console.log(parseInt(random));

let max = parseInt(prompt("Enter the max number: "));

let min = parseInt(prompt("Enter the min number: "));

let random = Math.floor(Math.random()*(max-min+1))+min;

console.log(random);
