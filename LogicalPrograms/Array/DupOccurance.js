let arr = [10, 20, 30, 20, 40, 10]

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
        console.log(arr[i]+" --> "+count+" times ");
    } 
}