import Prompt from "prompt-sync";
let prompt = Prompt();

let no = parseInt(prompt("Enter the Table Number: "))

let res = 1;

for(let i=1; i<=10; i++)
{
    res = no * i;
    console.log(`${no} * ${i} = ${res}`);
}