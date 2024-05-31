// A function that takes another function as an argument (callback)

function greeting(name, callback)
{
    console.log("Hello!", name);
    callback();
}

// Another function to be used as a callback
function bye()
{
    console.log("GoodBye!");
}

// Calling the function and passing in the callback
greeting("Ramesh", bye);

// Output:
// Hello Ramesh
// Goodbye!