let s = 'wELCOME to coding beauty';

let s1 = s.split(" ");

for(let i=0; i<s1.length; i++)
{
    if(i==0)
    {
        s1[i] = s1[i].toLowerCase();
        s1[i] = s1[i][0].toUpperCase() + s1[i].substring(1);
    }
    else
    {
        s1[i] = s1[i][0].toUpperCase() + s1[i].substring(1);
    }
    
}
console.log(s1.join(" "));