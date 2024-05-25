let a = [1,4,9,3,5,6,2,7,8];

let res = [];

for(let i=0; i<=a.length; i++)
{
    let count = 0;

    for(let j=1; j<=a[i]; j++)
    {
        if(a[i] % j == 0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        res.push(a[i]);
    }  
}
console.log(...res);