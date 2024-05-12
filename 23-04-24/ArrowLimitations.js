// No this Binding: 
// Arrow functions do not bind their own this context. Instead, they inherit the this value 
// from the surrounding lexical scope. This behavior can lead to unexpected results when used in certain contexts,
//  such as event handlers or object methods where the intended this context is crucial.
const obj =
{
  value: 42,
  getValue: () => this.value // `this` refers to the global object, not `obj`
};
console.log(obj.getValue()); // Output: undefined

// No arguments Object: 
// Arrow functions do not have their own arguments object like traditional functions. 
// If you need to access the arguments passed to an arrow function, you must use the rest parameters 
// syntax (...args) instead.
const sum = (...args) => 
    {
      return args.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3)); // Output: 6

// Cannot Be Used as Constructors: 
// Arrow functions cannot be used as constructors to create new objects. 
// Attempting to use an arrow function with the new keyword will result in a runtime error.
const Person = (name) => 
{
  this.name = name; // Error: Arrow functions cannot be used as constructors
};  
const person = new Person('Alice');
  