let s = "i am from test yantra";

let s1 = s.split(" ");
let res =" ";

for(let i=0; i<s1.length; i++)
{
    let ch = s1[i];
    if(i % 2 == 0)
    {
        let rev = "";
        for(let j=ch.length-1; j>=0; j--)
        {
            rev += ch[j];
        }
        res+=rev+" ";
    }
    else
    {
        res += s1[i]+ " ";
    }
}
console.log(res);
