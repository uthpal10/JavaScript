import Prompt from "prompt-sync";
let prom = Prompt();

// take the operator input
const operator = prom('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseInt(prom('Enter first number: '));
const number2 = parseInt(prom('Enter second number: '));

let result;
switch(operator) 
{
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}