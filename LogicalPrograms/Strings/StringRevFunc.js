let input = "I love my country. I love my parents";

let s = input.split(". ");

let r1 = s[0];
// console.log(r1);

let r2 = s[1];
// console.log(r2);

function reverse(s)
{
    let s1 = s.split(" ");
    let r = "";
    for(let i=s1.length-1; i>=0; i--)
    {
        if(i == 0)
        {
            r += (s1[i]);
        }
        else
        {
            r += (s1[i]+" ");   
        }
    }
    return r;
}
let res1 = reverse(r1);
let res2 = reverse(r2);

let output = res1+ ". " +res2;
console.log(output);