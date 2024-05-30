let arr = [1,2,3,4,1,2,3];

function uniqueArray(a)
{
    let res = Array.from(new Set(a));
    return res;
}
let r = uniqueArray(arr);
console.log(r);