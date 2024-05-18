let s = "In d ia";

let s1 = s.split('');
let count = 0;
for(let i=0; i<s1.length; i++)
{
    if(s1[i] != ' ')
    {
        count++;
    }
}
console.log(count);