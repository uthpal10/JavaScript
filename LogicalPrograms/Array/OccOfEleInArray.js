var arr = [20, 10, 30, 10, 40, 50, 20]

for(var i=0; i<arr.length; i++)
{
    var count = 0;
    for(j=0; j<arr.length; j++)
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
    if(count>=1)
    {
        console.log(arr[i]+" --> "+ count);
    }
}