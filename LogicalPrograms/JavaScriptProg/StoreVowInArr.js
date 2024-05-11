// function vowels(str)
// {
//     let arr = [];
//     for(let i=0; i<str.length; i++)
//     {
//         let ch = str[i];
//         if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
//         {
//             arr.push(ch);
//         }   
//     }
//     return arr;
// }
// const input = 'testyantra';
// let result = vowels(input);
// console.log(result);

//////// ===> one more way <=== /////////

let s = "testyantra";

let vowels = "AEIOUaeiou"
let res = [];

s.split('').forEach( char =>
{
    if(vowels.includes(char))
    {
        res.push(char);
    }
})
console.log(res);