function Person(name, age, id, details) 
{
    this.name = name;
    this.age = age;
    this.id = id;
    this.details = details;
    this.fname = 'uthpal';
}
let person1 = new Person('Suresh', 22, 123, 
function details()
{ 
    // console.log("Details are"+" "+this.age);
    console.log(`Detals are ${this.age}`);
})

console.log(person1);
console.log(person1.fname);
// person1.details()

console.log(new Person('Abhay', 20, 456));
