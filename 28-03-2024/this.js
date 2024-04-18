// "use strict";
// Alone this is global object --  refers to window object in browsers --> same goes for strict mode
let a = this;
console.log(a);

// this example shows this always refers to window object
// this.name = 'uthpal';
// console.log(window.name);

// this inside function refers to global object --> refers to window object in browsers --> Implicit function binding
// In the stict mode this inside function is undefined -- Any Function

let arr = () =>
{
    console.log(this);
}
arr()

// In HTML event handlers, this refers to the HTML element that received the event
function Person() 
{
    this.name = 'uthpal'; // when function is used as constructor func (used to create objects) 
    console.log(this);    // this refers to the object inside which it is used
}
let person1 = new Person();
// console.log(person1);