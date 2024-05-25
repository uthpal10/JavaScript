import Prompt from "prompt-sync";
let prom = Prompt();

let number = parseInt(prom("Enter the number: "));

for(let i=1; i<=10; i++)
{
    let res = i * number;
    console.log(`${number} * ${i} = ${res}`)
}
