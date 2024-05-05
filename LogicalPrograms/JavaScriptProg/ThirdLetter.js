// function fetch_Third_Letter(arr)
// {
//     let output = [];
//     for(let i=0; i<arr.length; i++)
//         {
//             let ch = arr[i];
//             let c = ch.charAt(3);
//             output.push(c);
//         }
//         console.log(output);
// }
// const input = ['javascript', 'selenium', 'api', 'cypress'];
// fetch_Third_Letter(input);

const words = ['javascript', 'selenium', 'api', 'cypress'];
const thirdLetters = words.map(word => word[2]);
console.log(thirdLetters.join(', '));