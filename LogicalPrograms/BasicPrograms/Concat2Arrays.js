let s = ["green", "white", "red"];
let s1 = [1,2,3];

let res = [];
for(let i=0; i<s.length; i++)
{
    if(i==s.length-1)
    {
     res.push(s1[i] + " = " + s[i]);   
    }
    else
    {
        res.push(s1[i] + " = " + s[i]+",");
    }
}
console.log(...res);

let out1 = s1.split("");
let out2 = s.split("");