let s = "The weather is wandy";

// let s1 = '';

// for(let i=s.length-1; i>=0; i--)
// {
//     s1 += s[i];
// }
// console.log(s1);

let s1 = s.split(' ');

let res = [];

for(let i=s1.length-1; i>=0; i--)
{
    let s2 = s1[i];
    let rev = '';
    for(let j=s2.length-1; j>=0; j--)
    {
        rev += s2[j];
    }
    res.push(rev);
}
console.log(...res);