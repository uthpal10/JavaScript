import Prompt from "prompt-sync";
let prompt = Prompt();

let no = parseInt(prompt("Enter the positive number: "));
let isPrime = true;

if(no === 1)
{
    console.log(`1 is neither Prime nor Composite Number`)
}
else if(no > 1)
{
    for(let i=2; i<no; i++)
    {
        if(no % 2 == 0)
        {
            isPrime = false;
            break;
        }
    }
    let res = isPrime ? `${no} is Prime Number` : `${no} is not a Prime Number`;
    console.log(res);
}
else
{
    console.log(`${no} is not a Prime  Number`)
}