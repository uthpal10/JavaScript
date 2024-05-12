let arr = [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<arr.length; i++)
{
    let flag = 0;
    for(let j=2; j<arr[i]; j++)
    {
        if(arr[i] % 2 == 0)
        {
            flag = 1;
            break;
        }
    }
    if(arr[i] > 1 && flag == 0)
    {
        console.log(`${arr[i]} is a Prime Number`);
    }
    else
    {
        // console.log(`${arr[i]} is not a Prime Number`);
    }
}
