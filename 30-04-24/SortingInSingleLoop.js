// const arr = [20, 37, 4, 10, 25];
// console.log(arr.sort( (a,b) => a-b));

function arraysort(arr)
{
    for(let i=0; i<arr.length-1; i++)
    {
        if(arr[i] > arr[i+1])
        {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            i = -1;
        }
    }
    return arr;
}
const arr = [12, 34, 15, 4, 78, 54];
let sortedArray = arraysort(arr);
console.log(sortedArray);