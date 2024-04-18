let arr = [10, 50, 70, 9, 80]

let min = arr[0];

for(let i=0; i<arr.length; i++)
{
    if(arr[i]<min)
    {
        min = arr[i];
    }
}
console.log(min);