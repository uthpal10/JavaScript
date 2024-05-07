let arr1 = [1,2,3,4,5];

let arr2 = [1,2,3];

let res = [];

let maxlen = Math.max(arr1.length, arr2.length);

for(let i=0; i<maxlen; i++)
{
    let sum = (arr1[i] || 0) + (arr2[i] || 0);
    res.push(sum);
}
console.log(res);