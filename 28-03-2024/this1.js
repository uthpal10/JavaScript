// let object = () =>
// {
//     console.log(this);         // In arrow fuction this refers to global or window object
// }
// object()

let obj = 
{
    fname:'ramesh',
    details : function outer() 
    {
        console.log(this);        //Inside object function or method this refers to the object
        console.log(this.fname);

        function inner(a,b) 
        {
            console.log(`${this} ${a+b}`);  // this refers to global object if it used in inner(stand func) 
            // console.log(this.fname);  // which is inside outer func (standard)   
        }
        inner(2,3);
    }
}
obj.details()

// const greek =
// {
//     lname : 'uthpal',
    
//     sayhi()
//     {
//         console.log(this);
//         console.log(this.lname);

//         let hi = () => 
//         {
//             console.log(this);
//             console.log(this.lname);
//         }
//         hi(); 
//     }
// } 
// greek.sayhi();
