// In JavaScript, an async function without an await expression will run synchronously. However, 
// if there is an await expression inside the function body, the async function will always complete asynchronously.

// In JavaScript, the async and await keywords are used to make asynchronous code easier to read. 
// The async keyword indicates that a function is asynchronous, and the await keyword suspends the 
// execution of an async function until a promise is fulfilled or rejected.

// Async/await is a feature in JavaScript that allows you to work with asynchronous code in a more 
// synchronous-like manner, making it easier to write and understand asynchronous code.

// Async Functions always return a promise. 
// Await Keyword is used only in Async Functions to wait for promise.

// Async functions will always return a value. It makes sure that a promise is returned and if it is not returned 
// then JavaScript automatically wraps it in a promise which is resolved with its value.

// Await is used to wait for the promise. It could be used within the async block only.
// It makes the code wait until the promise returns a result.
// Syntax for await ==> let value = await promise;

// The async keyword transforms a regular JavaScript function into an asynchronous function, 
// causing it to return a Promise.
// The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve 
// before continuing.

// An async function without an await expression will run synchronously. If there is an await expression 
// inside the function body, however, the async function will always complete asynchronously.

// Use the then() method
// The then() method accepts a function and returns a Promise. If the function returns a Promise, 
// it will be resolved before its value is passed into the next then() in the chain.

// Use the race() method
// The race method waits for the first promise to be resolved or rejected. If the first promise is resolved, 
// the .then handler will be executed. If the first promise is rejected, the .catch handler will be executed.