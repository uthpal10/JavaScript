let arr1 = [1,2,3,4,5];

let arr2 = [1,2,3]

let res = [];

let max = Math.max(arr1.length,arr2.length);

for(let i=0; i<max; i++)
{
    if(arr1.length<arr2.length)
    {
        sum += arr1 + arr2;
    }
    else if(arr1.length)
    {
        console.log(arr1[i]);
    }
    else
    {
        console.log(arr2[i]);
    }
}
console.log(res);