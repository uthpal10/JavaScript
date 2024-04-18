const person = { firstName:'Raghu', lastName:'Doe', age:24 }
person.id = 98

// --> To convert javascript object into json object --> Stringify()
// let res = JSON.stringify(person);
// console.log(res);

// --> To convert json object into javascript object --> parse()
let res = JSON.parse('{"firstName":"Raghu","lastName":"Doe","age":24,"id":98}');
console.log(res);

// console.log(person); // By calling object name

// console.log(person.firstName); // By calling a object property

// for (const key in person) 
// {
//    console.log(key + " "+ person[key]);
// }

// res = Object.values(person);
// console.log(res);