var arr = [10, 20, 30, 40, 20]

for(let i = 0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i]==arr[j])
        {
            arr[j]=0;
        }
    }
}
for(let k=0; k<arr.length; k++)
    {
        if(arr[k]!=0)
        {
            console.log(arr[k]);
        }
    }