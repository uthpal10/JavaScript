const arr = [10, 20, 30, 40, 20];

let abb = [];

for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i] == arr[j])
        {
            arr[j] = 0;
        }
    }
}
for(let k=0; k<arr.length; k++)
{
    if(arr[k]!=0)
    {
        abb.push(arr[k]);
    }
}
console.log(abb);