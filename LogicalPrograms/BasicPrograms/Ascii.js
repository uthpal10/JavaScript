let s = "dbjhDEp";
let s1 = s.split("");

let max = 0;

for(let i=0; i<s1.length; i++)
{
    let ch = s1[i].charCodeAt();
    console.log(`${s1[i]} ==> ${ch}`);
    
    if(ch>max)
    {
        max = ch;
    }
}
console.log(`Maximum value is ${max}`);

let char = String.fromCharCode(112);
console.log(char); // Output: 'p'