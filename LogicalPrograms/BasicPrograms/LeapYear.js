import Prompt from "prompt-sync";
let prom = Prompt();
let year = prom("Enter the year: ");

function leapyear(n)
{
    if( (n % 4 == 0) && (n % 400 == 0) && (n % 100 != 0) )
    {
        console.log(`${year} is a Leap Year`);
    }
    else
    {
        console.log(`${year} is not a Leap Year`);
    }
}
leapyear(year)

function leapyear1(n)
{
    let leap = new Date(n, 1, 29).getDate() === 29;
    console.log(leap);
    let res = leap? `${n} is a Leap year` : `${n} is not a Leap year`;
    console.log(res);
}
leapyear1(year)