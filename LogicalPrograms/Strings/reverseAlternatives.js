let s = "hello";

let s1 =s.split("");
let rev = "";

for(let i=0; i<s1.length; i++)
{
  rev = s1[i] + rev;
}
console.log(rev);

for(let i=rev.length-1; i>=0; i--)
{
    console.log(rev.substring(0,i));
}
