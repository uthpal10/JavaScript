function sortInSingleLoop(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > arr[i+1])
        {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            i = -1;
        }
    }
    console.log(arr);
}
const input = [23, 43, 1, 54, 4, 12,];
sortInSingleLoop(input);