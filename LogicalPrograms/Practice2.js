let str = "testyantra";

for (let i = 0; i < str.length; i++) 
{
    let ch = str.charAt(i);

    if(ch == 'a'|ch == 'e'|ch == 'i'|ch == 'o'|ch == 'u')
    {
        // console.log("Vowels --> "+ ch +"--> "+ i);
    }
    else
    {
        console.log(("Consonants are --> "+ ch +"--> "+ i));
    }
}