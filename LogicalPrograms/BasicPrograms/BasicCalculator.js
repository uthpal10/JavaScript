import Prompt from "prompt-sync";
let prom = Prompt();

let operator = prom("Enter the operator ('+', '-', '*', '/'): ");
let firstNo = parseInt(prom("Enter the first Integer no: "));
let secondNo = parseInt(prom("Enter the second Integer no: "));

let result;

if(operator == "+")
{
    result = firstNo + secondNo;
    console.log(`${firstNo} ${operator} ${secondNo} = ${result}`);
}
else if(operator == "-")
{
    result = firstNo - secondNo;
    console.log(`${firstNo} ${operator} ${secondNo} = ${result}`);
}
else if(operator == "*")
{
    result = firstNo * secondNo;
    console.log(`${firstNo} ${operator} ${secondNo} = ${result}`);
}
else if(operator == "/")
{
    result = firstNo / secondNo;
    console.log(`${firstNo} ${operator} ${secondNo} = ${result}`);
}
else
{
    console.log("Invalid Operator");
}