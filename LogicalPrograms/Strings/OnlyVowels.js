let str = 'AeiUnm';

let res = 0;

for(let i=0; i<str.length; i++)
{
    let ch = str.charAt(i).toLowerCase();

    if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
    {
        res++;
        // console.log(ch+" is a vowel ");
    }
 }
 console.log(`Number of vowels in string ${res}`);
