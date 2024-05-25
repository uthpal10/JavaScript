let s = "racecar";

let n = s.length;
let res = true;

for(let i=0; i<n/2; i++)
{
    if(s[i] != s[n-1-i])
    {
        res = false;
    }
}
console.log(res ? `Palindrome` : `Not Palindrome`);

let rev = "";
for(let i=s.length-1; i>=0; i--)
{
    rev = rev + s[i];
}
console.log(res ? `Palindrome` : `Not Palindrome`);