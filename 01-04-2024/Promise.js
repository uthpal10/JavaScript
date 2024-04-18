async function execute() // Not mandatory to use async without async also it will work
{
    console.log("Login to Application");

let p = new Promise((resolve, reject) =>
{
    setTimeout(() => 
    {
        resolve("Navigated to Homepage"); // when successful
        reject("Error"); // when error
    }, 2000);
})

await p.then((msg) => {console.log(msg);}).catch((msg) => {console.log(msg);})

let p1 = new Promise((resolve, reject) =>
{
    setTimeout(() => 
    {
        resolve("Fetched page Title");
        reject("Error");
    }, 3000);
})

await p1.then((msg) => {console.log(msg);}).catch((msg) => {console.log(msg);})

{
    console.log("Logged out from Application");
}

}
execute()
