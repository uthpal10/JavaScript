// Prototype Inheritance --> Standard object --> Parent Object

let laptop =
{
    Brand : 'Dell',
    Model : 'E-3480',
    CPU : 'i7',
    Ram : '8gb',
    details : function () 
    {
        console.log(`The laptop details are ${this.Brand} ${this.Model} ${this.CPU} ${this.Ram}`);
    }
}
console.log(laptop);

// object.create() to create the objects with same proptotype --> Child object

let laptop1 = Object.create(laptop)
console.log(laptop1);  // {} empty object with properties of old / Parent object

laptop1.Brand = 'Lenovo';
laptop1.Model = 'Z 51-70';
console.log(laptop1); // Overriding --> It will override the properties in parent object

laptop1.details(); // Inheitance --> Inherit the property which is not available in the child from the parent

console.log(Object.getPrototypeOf(laptop1)); // Returns the prototype of an object.

Array.prototype.sum = function (a, b) // sum(a,b) 
{
    console.log('New Method');
    console.log(`Sum is ${a+b}`);    
}

let arr = [1, 2, 3];
arr.sum(2,4)
// arr.sum(2,2)