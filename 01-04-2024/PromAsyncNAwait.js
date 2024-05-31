async function execute()
{
    console.log("Started");
    
    let p = new Promise( (resolve, reject) =>
    {
       setTimeout( () =>
        {
            console.log("Hello");
            resolve("resolved promise");
            reject("rejected promise");
        }, 3000); 
    });
    await p.then( (m) => console.log(m))
    .catch( (m) => console.log(m))
    .finally( (m) => console.log("I am finally block"));
    
    console.log("Ended");
}
execute()