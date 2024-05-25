let s = "javascriptwebdriverio";
s =s.split("");

let s1 = "101101011001011010110";
s1 = s1.split("");

let res = [];
for(let i=0; i<s1.length; i++)
{
    if(s1[i] == 1)
    {
        res.push(s[i].toUpperCase());
    }
    else
    {
         res.push(s[i]);
    }
}
console.log(...res);