var str = "qwerty";

let res = [];

for(let i=0; i<str.length; i++)
{
    let ch = str.charAt(i);
    
    if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
    {}
    else
    {
        res.push(ch)
    }
}
console.log("output without vowels: "+ res);