let s = "h&el$l%o9";

let s1 = s.split();

let rev = "";

for(let i=s1.length-1; i>=0; i--)
{
    if(/[A-Z]/.test(s[i]) || /[a-z]/.test(s[i]) || /[0-9]/.test(s[i]))
    {
        rev += s1[i];
    }
}
console.log(rev);