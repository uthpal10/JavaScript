// function sumNumbers(str) {
//     let sum = 0;
//     let currentNumber = '';

//     for (let char of str) {
//         if (!isNaN(parseInt(char))) {
//             currentNumber += char;
//         } 
//         else 
//         {
//             if (!currentNumber == '') 
//             {
//                 sum += parseInt(currentNumber);
//                 currentNumber = '';
//             }
//         }
//     }
//     // Add the last number if it's present in the string
//     if (!currentNumber == '') {
//         sum += parseInt(currentNumber);
//     }
//     return sum;
// }
// const inputString = 'AxB5#*eZ45jhjhh40gcg2000';
// const totalSum = sumNumbers(inputString);
// console.log(`The Addition of All Numbers are : ${totalSum}`);

let s = "AxB5#*eZ45jhjhh40gcg2000A";
let sum = 0;
let characters = "";

for(let i=0; i<s.length; i++)
{
    ch = s[i];
    if(!isNaN(parseInt(ch)))
    {
        console.log(ch);
        characters += ch; 
    }
    else
    {
        console.log(ch);
        if(characters.length >= 1)
        {
            sum += parseInt(characters);
            characters = "";
        }
    }
   console.log(characters); 
}
if(characters.length >= 1)
{
    sum += parseInt(characters);
}
console.log(sum);

