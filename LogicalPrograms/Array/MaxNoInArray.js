let arr = [100, 50, 89, 99, 101];

let maximun = Math.max(...arr);
console.log(maximun);

let max = 0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i]>max)
    {
        max = arr[i]
    }
}
console.log(max);
