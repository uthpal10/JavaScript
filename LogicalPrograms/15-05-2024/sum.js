let s = 'a1b4c5';

let sum = 0;

let char = '';

for(let i=0; i<s.length; i++)
{
    if(!isNaN(parseInt(s[i])))
    {
        sum += parseInt(s[i]);
    }
}
console.log(sum);