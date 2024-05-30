let s = "i am samuel";

let map = new Map();

for(let i=0; i<s.length; i++)
{
    if(map.has(s[i]))
    {
        map.set(s[i], map.get(s[i]) +1)
    }
    else
    {
        map.set(s[i], 1);
    }
    if(s[i] == 'a')
    {
        console.log(`Index ==> ${i}  and repeated ${map.get(s[i])} times`);   
    }
}