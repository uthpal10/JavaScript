let str = 'Vowels';

let output = [];

for(let i=0; i<str.length; i++)
{
    let ch = str.charAt(i).toLowerCase();

    // if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
    // {
    //     output.push(ch)
    // }

    
    if(ch!=='a'|ch!=='e'|ch!=='i'|ch!=='o'|ch!=='u')
        {
            output.push(ch)
        }
 }
 console.log("Only vowels in the String: " + output);
