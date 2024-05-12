// Standard Function
// function add(a, b)
// {
//     console.log(a+b);
// }
// add(4,5)

// Function Expression
// let sub = function(a,b)
// {
// console.log(a-b);
// }
// sub(9,7)

// IIF - Immediately Invokable Function
(function mul(a,b)
{
    console.log(this === undefined);
    console.log(a*b);
})
(4,2)