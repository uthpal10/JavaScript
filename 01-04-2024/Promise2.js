const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Second'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Third'));

Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results)) // ["First", "Second", "Third"]
    .catch(error => console.error(error));

Promise.race([promise1, promise2, promise3])
    .then(result => console.log(result)) // "First"
    .catch(error => console.error(error));
