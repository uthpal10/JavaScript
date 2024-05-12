// javascript execution is synchronous, But only in the case of timeout methods it behaves like Asynchronous

// Asynchronous behaviour in javascript due to the timeout methods

// Event loop execution -- why javascript is Asynchronous ??????

// Solution for this is promise -- Async and await

{
    console.log("Login Successful");
}
setTimeout(() => 
{
    console.log("Search for the product");
}, 3000);

setTimeout(() => 
{
    console.log("Add product to the cart");    
}, 2000);

{
    console.log("Log out successful");
}

// Source code -- call stack -- executed line by line in call stack -- 
// if it encounters any timeout methods (set interval and set timeout)

// timeout methods will be moved to node/web api - (provided by browsers) -- 
// call back queue - [event loopwill monitor] - when call stack is empty == these timeout methods will move to callstack 