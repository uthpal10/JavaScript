// Introduced in ES6 --> customized form of writing function --> It is also called as Anonymous function.
// If an arrow function has a single expression in its body, the return statement is implicit.

let add = (a,b) => a+b;
console.log(add(5,5));

// One of the significant features of arrow functions is that they do not have their own this context.
//  Instead, they inherit this from the surrounding lexical context (often the enclosing function or global scope).

// const obj = // arrowFunction(); 
// {
//     value: 42,
//     getValue: () => {
//       this.value;
//     }
// };
// const arrowFunction = obj.getValue(); // Output: undefined window object in browser

const obj = //   regularFunction();
{
    value: 42,
    getValue: function() 
    {
      console.log(this.value);
    }
}
obj.getValue(); // Output: 42  