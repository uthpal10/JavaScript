 var arr = [10, 20, 30, 40, 10, 20]

 for(var i=0; i<arr.length; i++)
 {
    var count = 0;
    for(var j=0; j<arr.length; j++)
    {
        if(arr[i]==arr[j])
        {
            if(j<i)
            {
                break;
            }
            count++
        }
    }
    if(count>1)
    {
        console.log(arr[i]+" is duplicated "/*+" ---> "+count*/);
    }
 }