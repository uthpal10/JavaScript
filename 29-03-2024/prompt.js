import Prompt from "prompt-sync";

const prom = Prompt()

// let un = prom('Please enter your Name: ');
// console.log(typeof(un));
// if(un!=null)
// {
//     console.log(`Hello ${un} nice to meet you!`);
// }

// let age = parseInt(prom("Enter the value: ")) // we can also use Number instead of parseInt
// if(isNaN(age))
// {
//     console.log(`${age} --> Not a number`);
// }
// else
// {
//     console.log(`${age} --> It is a number`)
// }

// Prompt the user for their age
let age = prom("What is your age?: ", 18);

// Display a message to the user
console.log("You are " + age + " years old.");