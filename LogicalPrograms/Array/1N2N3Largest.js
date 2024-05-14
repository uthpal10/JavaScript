let arr = [90, 420, 30, 10, 50,100];

let fl = 0, sl = 0, tl = 0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i] > fl)
    {
        tl = sl;
        sl = fl;
        fl = arr[i];
    }
    else if(arr[i]>sl)
    {
       tl = sl
       sl = arr[i];
    }
    else
    {
        tl = arr[i];
    }
}
console.log(fl);
console.log(sl);
console.log(tl);