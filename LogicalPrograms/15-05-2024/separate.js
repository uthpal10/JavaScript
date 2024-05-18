let s = 'a2b&3d$5';

let s1 = s.split('');

let alp = "", nos = "", spc = "";

for(let i=0; i<s1.length; i++)
{
    if(/[a-z]/.test(s[i]))
    {
        alp += s[i];
    }
    else if(/[0-9]/.test(s[i]))
    {
        nos += s[i];
    }
    else
    {
        spc += s[i]
    }
}
console.log(alp, nos, spc);