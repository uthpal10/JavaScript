let s = "The quick brown fox jumps over the lazy dog";
s = s.toLowerCase().split("");

let s1 = "abcdefghijklmnopqrstuvwxyz";
s1 =s1.split("");

let flag = false;

s1.map( e =>
{
    if(s.includes(e))
    {
     flag = true;
    }
})

let res = flag ? 'Pangram' : 'Not Pangram';
console.log(res);