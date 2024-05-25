let start = 1;
let end = 30;

let res = [];

for(let i=start; i<=end; i++)
{
    let count = 0;
    for(let j=1; j<=i; j++)
    {
        if(i % j == 0)
        {
            count ++;
        }
    }
    if(count == 2)
    {
        res.push(i);
    }
}
console.log(...res);