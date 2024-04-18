const s = "uthpal";

// console.log(s);

for(let i=0; i<s.length; i++)
{
    let ch = s.charAt(i).toLowerCase();
    
    if(ch == 'a'|ch == 'e'|ch == 'i'|ch == 'o'|ch == 'u')
    {
        // console.log(`The vowel character is '${ch}' and its position is ${i} `);
    }
    else
    {
        console.log(`The consonant character is '${ch}' and its position is ${i} `);
    }
}