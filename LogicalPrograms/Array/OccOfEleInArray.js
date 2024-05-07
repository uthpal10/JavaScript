const arr = [20, 10, 30, 10, 40, 50, 20]

for(let i=0; i<arr.length; i++)
{
    let count = 0;
    for(let j=0; j<arr.length; j++)
    {
        if(arr[i]==arr[j])
        {
            if(j<i)
            {
                break;
            }
            count++;
        }
    }
    if(count>1)
    {
        console.log(arr[i]+" --> "+ count);
    }
}