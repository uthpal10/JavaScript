let s = "i am waiting here";
let s1 = s.split("");

for(let i=0; i<s1.length; i++)
{
    if(s1[i] == 'e' )
    {
        s1[i] = 'F';
    }
}
console.log(s1.join(""));

let s2 = s.replaceAll('e', 'F');
console.log(s2);

let s3 = s.split("e").join("F")
console.log(s3);