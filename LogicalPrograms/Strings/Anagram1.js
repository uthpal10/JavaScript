let s = "race";
let s1 = "cars";

if(s.length != s1.length)
{
    console.log("Not Anagram");
}
else
{
    let st = s.split('').sort();
    console.log(st);
    
    let st1 = s1.split('').sort();
    console.log(st1);
    
    let flag = true;
    for(let i=0; i<st.length; i++)
    {
        if(st[i] != st1[i])
        {
            flag = false;
            break;
        }
    }
let out = flag==true ? `Anagram` : `Not Anagram`;
console.log(out);
}