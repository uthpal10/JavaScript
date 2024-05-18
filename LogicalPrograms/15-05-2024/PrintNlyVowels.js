let s = 'India';

let s1 = s.toLowerCase().split('');

let vowels = 'aeiou';

let set = new Set();

for(let i=0; i<s1.length; i++)
{
    set.add(s1[i]);
}
console.log(set);

let count = 0;
for(let k of set)
{ 
    if(vowels.includes(k))
    {
        count++;
        console.log(k);
    }
}
console.log(count);