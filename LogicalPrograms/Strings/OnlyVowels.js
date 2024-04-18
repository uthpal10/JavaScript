let str = 'donald';

let res = "";

for(let i=0; i<str.length; i++)
{
    let ch = str.charAt(i);

    if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
    {
        res = res + ch;
        console.log(ch+" is a vowel ");
    }
 }
//  console.log(res);
