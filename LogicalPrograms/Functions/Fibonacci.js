let fibo = [0,1];

function fibonacci(n)
{
    for(let i=2; i<=n; i++)
    {
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
let inp = 10;
let res = fibonacci(inp);
console.log(res);