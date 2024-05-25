let a = 0;
let b = 1;
let c = 0;

let res = [];

res.push(a+" ");
res.push(b);

for(let i=1; i<=10; i++)
{
    c = a+b;
    a = b;
    b = c;
    res.push(" "+c);
}
console.log(...res);