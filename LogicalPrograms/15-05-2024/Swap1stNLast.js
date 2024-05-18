let s = "The weather is wandy";

let s1 = s.split(' ');

for(let i=0; i<s1.length; i++)
{
    let temp = s1[0];
    s1[0] = s1[s1.length-1];
    s1[s1.length-1] = temp
}
console.log(s1.join(' '));