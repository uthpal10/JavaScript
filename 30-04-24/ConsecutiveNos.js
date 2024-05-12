let no = 997561289;

let arr = Array.from( String(no), Number );
// console.log(arr);

let abb = [];

// let res =[];

for(let i=0; i<arr.length; i++)
{
    if( arr[i] - arr[i+1] == -1 | arr[i]+1 == arr[i+1] | arr[i]+2 == arr[i+2])
    {
        abb.push(arr[i], arr[i+1]);
    }
}
console.log(...abb);

// for(let i=0; i<abb.length; i++)
// {
//     for(let j=i+1; j<abb.length; j++)
//     {
//         if(abb[i] == abb[j])
//         {
//             abb[j] = 0;
//         }
//     }
// }
// for(let k=0; k<abb.length; k++)
// {
//     if(abb[k]!=0)
//     {
//         res.push(abb[k]);
//     }
// }
// console.log(...res);