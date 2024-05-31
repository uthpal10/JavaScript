// Returns the Unicode value of the character at the specified location

let sl = "abcdefghijklmnopqrstuvwxyz";

let cl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let nos = "0123456789";

let res = [];
let res1 = [];

for(let i=0; i<sl.length; i++)
{
    res.push(`${cl[i]} => ${cl.charCodeAt(i)}`);
    // res.push(`${sl[i]} => ${sl.charCodeAt(i)}`); 
}
console.log(res);

for(let i=0; i<nos.length; i++)
{
    res1.push(`${nos[i]} => ${nos.charCodeAt(i)}`);; 
}
console.log(res1);
