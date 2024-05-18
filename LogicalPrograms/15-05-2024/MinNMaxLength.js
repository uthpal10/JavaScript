let s = ['abcd', 'edfg', 'cd', 'cdefg'];

let min_length = s[0].length;

for(let i=0; i<s.length; i++)
{
    if(s[i].length>min_length)             // For maximum
    {
        min_length = s[i].length;
    }
}
console.log(min_length);
    // for(let j=0; j<s.length; j++)
    // {
    //     if(s[j].length == min_length.length)
    //     {
    //     console.log(s[j]);
    //     }
    // }
