import Prompt from "prompt-sync";
const prompt = Prompt();

const startNo = parseInt(prompt("Enter the starting Range: "));

const EndNo = parseInt(prompt("Enter the Ending Range: "));

console.log(`The Prime no between ${startNo} and ${EndNo} are: `);

for(let i=startNo; i<=EndNo; i++)
{
    let flag = 0;
    for(let j=2; j<i; j++)
    {
        if(i%j==0)
        {
            flag = 1;
            break;
        }
    }
    if(flag==0 && i>1)
    {
        console.log(i);
    }
}