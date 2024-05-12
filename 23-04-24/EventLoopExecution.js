// Javascript will perform in Asynchronous way if script contains any timeout methods
{
    console.log('Login Successful');
}

setTimeout( () => {
    console.log("Search and add product to the cart");
}, 2000)

let set = setInterval( function() {
    console.log("Place an order");
}, 2000)

setTimeout( () => {
    clearInterval(set)
    console.log("Cleared after 10 seconds");
}, 10000);

{
    console.log("Logged out");
}