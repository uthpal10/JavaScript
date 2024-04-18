// const obj = 
// {
//     name : 'deeecode',
//     age : 200,
//     // print : function()  // normal func --> this points to the object which calls the print() and it prints values
//     print : () =>    // Arrow func --> Arrow func won't create their own this binding -- points to window object 
//     {                              // --> It points to this which is before creation of print()
//       console.log(this)
//     }
// } 
// obj.print()

const obj = 
{
    name: 'deeecode',
    age: 200,
    print: function() 
    {
      console.log(this);
     function print2()   // Normal function -- this points to previous reference because no object calls print2(print2())
    //  let print2 = () =>  // In arrow func this won't create its own this variable so it points to this reference
      {                      // which is there before creation of print2() 
        console.log(this);
      }
      print2()
    }
  }
  obj.print()