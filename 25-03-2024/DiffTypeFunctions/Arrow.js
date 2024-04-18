// Arrow function was introduced in ES6 - 2015 asto simplify in writing the functions

// Here we have avoided the curly braces and parenthesis
let arr = a => a
console.log(arr(10));

// Here we have included parenthesis andcurly braces
let abb = (a,b) =>
{
    // console.log(arguments);   // In arrow function we can't print 'Arguments' -- Reference error -- Args not defined  
    // console.log(a/b);
    return a/b;
}
// abb(60, 4)
console.log(abb(60, 4));

// Simplified or customized form -- avoided return statement and curly braces as well
let acc = (a, b, c) => a*b*(a+c)
console.log(acc(2, 4, 6));