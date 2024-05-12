// for...of loop:
// Introduced in ES6, this loop is specifically designed for iterating over
//  iterable objects such as arrays, strings, maps, sets, etc.

let arr = [21, 32, 56, 89, 2]

// break statement, Index, Original array
for(let value of arr)
{
    if (value === 56) 
    {
        console.log(value);
        break;   
    }
}

console.log("================");

// In JavaScript, there's no built-in forEach loop; however, the forEach method is available for arrays. 
// It's used to execute a provided function once for each array element

arr.forEach( (ele, index, arr) => 
{
    if (ele === 56) 
    {
        // break; Since it is not a loop, break statement usage is Not Possible
    }
    // console.log(ele*2 , index, arr);
    console.log(ele*2);  
});

console.log("================");

for(let value of arr)
{
    console.log(value);
}

console.log("================");

arr.forEach( (ele, index, arr) => 
{
    console.log(ele*3 + ' ===> ' + index);
    // console.log(ele*3, index, arr);
})