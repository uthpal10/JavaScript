const arr = [10, 20, 30, 'uthpal', 40, null, undefined]

let count = 0;

for(let i=0; i<arr.length; i++)
{
    if(typeof arr[i]==='number')
    {
        count++;
    }
}
console.log(count);