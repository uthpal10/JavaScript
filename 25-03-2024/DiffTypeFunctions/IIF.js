// (function mul(a,b)
// {
//     // let c = a*b;
//     // console.log(c);
//     console.log((a*b));
// })
// (2,4)
var q = 20;
(function add(a,b) 
{
    console.log(a+b);
    console.log(this);       // this is undefined inside the function --> refers to window object in browser
    console.log(arguments);    
})
(2,2)