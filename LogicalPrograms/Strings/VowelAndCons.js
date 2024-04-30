var str = 'MOrningAa';

let vowels = 0;
let consonants = 0;

for(let i=0; i<str.length; i++)
{
    let ch = str.charAt(i).toLowerCase();
    
    if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
    {
        vowels++;
        console.log(ch+" is a vowel ");
    }
    else
    {
        consonants++;
        console.log(ch+" is a consonant ");
    }
}
console.log(" Vowels ---> "+vowels+" nos ");
console.log(" Consonants ---> "+consonants+" nos ");