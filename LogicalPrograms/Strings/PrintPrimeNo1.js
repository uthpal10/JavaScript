import Prompt from 'prompt-sync';
const prompt = Prompt();

const num = parseInt(prompt("Enter the Number: "));

let isprime = true;

if (num === 1)
{
    console.log("1 is neither Prime nor composite number");
}
else if (num > 1)
{
    for(let i=2; i<num; i++)
    {
        if( num % i == 0)
        {
            isprime = false;
            break;
        }
    }
    if (isprime)
    {
        console.log(`${num} is a Prime number`);
    }
    else
    {
        console.log(`${num} is not a Prime number`);
    }
}
else
{
    console.log(`${num} is not a Prime number`);
}
