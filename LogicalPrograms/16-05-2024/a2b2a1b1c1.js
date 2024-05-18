let s = "aabbabc";

let res = [];

let count = 1;

for(let i=0; i<s.length-1; i++)
{
    if(s[i] == s[i+1])
    {

        count++;
    }
    else
    {
        res.push(s[i]+""+count);
        count = 1;
    }
}
res.push(s[s.length-1]+""+count);
console.log(...res);