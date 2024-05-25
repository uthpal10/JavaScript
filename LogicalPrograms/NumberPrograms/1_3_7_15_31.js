let no = 1;
let sum = 0;

let res = [];

res.push(no);

for(let i=1; i<5; i++)
{
    sum = (no+no) +1;
    res.push(sum);
    no = sum;
}
console.log(...res);