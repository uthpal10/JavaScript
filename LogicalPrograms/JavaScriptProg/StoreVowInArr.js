function vowels(str)
{
    let arr = [];
    for(let i=0; i<str.length; i++)
    {
        let ch = str[i];
        if(ch=='a'|ch=='e'|ch=='i'|ch=='o'|ch=='u')
        {
            arr.push(ch);
        }   
    }
    return arr;
}
const input = 'testyantra';
let result = vowels(input);
console.log(result);