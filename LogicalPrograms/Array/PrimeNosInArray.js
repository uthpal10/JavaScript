var arr = [1,2,3,4,5,6,7]

let no = 1;
for(let i=1; i<=arr.length; i++)
{
    let count = 0;

    for(no=i; no>=1; no--)
    {
        if(i % no == 0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log(i+" is a Prime Number ");
    }
    // else
    // {
    //     console.log((i+" is not a Prime Number"));
    // }
}