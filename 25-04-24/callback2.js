// Asynchronous Callbacks

// Callbacks are especially useful for handling asynchronous operations, such as:

// 1. Timers:

function delayedGreeting()
{
    console.log("Hello executed after 3 seconds");
}

setTimeout(delayedGreeting, 3000); // Wait 3 seconds before calling delayedGreeting

// Output (after 3 seconds delay):
// Hello executed 3 seconds

// 2. Network Requests:

function fetchData(callback) 
{
    // Simulating an asynchronous network request
    setTimeout( () => 
    {
        const data = { user: 'John', age: 30 };
        callback(data);
    }, 2000);
}

function handleData(data) 
{
    console.log('Data received:', data);
}

fetchData(handleData);

// Output (after 2 seconds delay):
// Data received: { user: 'John', age: 30 }

// callback Hell
// asyncOperation1(function(result1) {
//     asyncOperation2(result1, function(result2) {
//         asyncOperation3(result2, function(result3) {
//             console.log('Final result:', result3);
//         });
//     });
// });
// When dealing with multiple asynchronous operations that depend on each other, you might end up with 
// deeply nested callbacks, known as "callback hell" or "pyramid of doom":