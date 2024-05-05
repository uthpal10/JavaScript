var str = "qwerty";

let res = "";

for(let i=0; i<str.length; i++)
{
    let ch = str.charAt(i);
    
    if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
    {}
    else
    {
        res = res + ch;
        console.log(ch+" is not a vowel ");
    }
}
// console.log(res);