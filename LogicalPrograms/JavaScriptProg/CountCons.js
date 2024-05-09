// function countConsonants(str) {
//     // const consonants = 'bcdfghjklmnpqrstvwxyz';
//     const vowels = 'aeiouAEIOU';
//     const count = [];

//     str.toLowerCase().split('').forEach(char => {
//         if (!vowels.includes(char)) {
//             count[char] = (count[char] || 0) + 1;
//         }
//     });

//     for (const consonant in count) {
//         console.log(`${consonant} --> ${count[consonant]}`);
//     }
// }

// const inputString = "testyantra";
// countConsonants(inputString);

const s = "uthpaluth";

const vowels = "AaEeIiOoUu";

const count = [];

s.split("").map( ch =>
{
    if(!vowels.includes(ch))
    {
        count[ch] = (count[ch] || 0) + 1;        
    }
    // console.log(ch, count[ch]);
})

for(let cons in count)
{
    console.log(`${cons} ==> ${count[cons]}`);
}