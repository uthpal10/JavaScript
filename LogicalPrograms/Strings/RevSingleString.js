let str = "Australia";
console.log(str);

let rev = "";

for(let i=str.length-1; i>=0; i--)
{
    // rev += str.charAt(i);
    rev += str[i];
}
console.log(rev);