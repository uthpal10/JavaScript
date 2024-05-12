import Prompt from 'prompt-sync';
const prompt = Prompt();

let arr = [];
const length = parseInt(prompt("Enter the size of Array: "));

let sum = 0;
for(let i=0; i<length; i++)
    {
        const ele = +prompt("Enter the element: ");
        arr.push(ele);
        sum = sum + arr[i];
    }
console.log(arr);
console.log(`Sum of the array elements is ${sum}`);