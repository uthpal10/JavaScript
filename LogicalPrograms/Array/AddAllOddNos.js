const arr = [10, 23, 30, 41]

let sum = 0;

for(let i = 0; i<arr.length; i++)
{
    if(arr[i]%2==1)
    {
       sum = sum + arr[i];
    }
}
console.log(sum);