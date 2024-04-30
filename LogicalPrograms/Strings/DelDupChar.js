let ch = ['u', 't', 'h', 'p', 'a', 'l', 'a', 'h'];

let c = [];

for(let i=0; i<ch.length; i++)
{
    for(let j=i+1; j<ch.length; j++)
    {
        if(ch[i] == ch[j])
        {
            ch[j] = 0;
        }
    }
}
for(let k=0; k<ch.length; k++)
{
    if(ch[k]!=0)
    {
        c.push(ch[k]);
        // console.log(ch[k]);
    }
}
console.log(...c);