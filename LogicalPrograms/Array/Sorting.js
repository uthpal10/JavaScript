var arr = [44, 23, 56, 12, 9, 87]

let temp = 0;

for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i]>arr[j])
        {
            temp = arr[i]

            arr[i] = arr[j]

            arr[j] = temp
        }
    }
}
for(let k=0; k<arr.length; k++)
{
    process.stdout.write(arr[k] +" ")
}