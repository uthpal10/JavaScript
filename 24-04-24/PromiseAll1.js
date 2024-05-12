// Promise.all() waits for all promises in the iterable to settle, 
// meaning they either all resolve or at least one rejects.
// Syntax === Promise.all(iterable);
// Here, iterable is an array or any iterable object containing promises.
// It returns a single promise that fulfills with an array of results when all promises in the iterable are fulfilled. 
// The order of the results corresponds to the order of the promises in the iterable.
// If any promise in the iterable is rejected, the whole Promise.all() is rejected with the reason of the first rejected promise. 
// Subsequent rejections are ignored.

let p1 = Promise.resolve(55);
let p2 = 123;
// let p3 = Promise.reject('error');
// let p4 = Promise.reject('error');
let p5 = new Promise( (resolve, reject) =>
{
    resolve("resolved");
    reject("rejected");
    setTimeout( () => 
    {
        resolve('promise5')   
    }, 2000);
})

Promise.all([p1, p2, p5]).then( (values) => { console.log(values);})
.catch( function(error) { console.log(error); } )