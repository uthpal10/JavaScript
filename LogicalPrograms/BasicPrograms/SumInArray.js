let input = [1,2,3,4,5,6,7,8,9,10];
console.log(input);
let input1 = [11,12,13,14,15,16,17,18,19,20];
// console.log(input1);

function sum(a)
{
   let r1 = [];
   if(a.length == 10)
   {
    let [e,f,g,h,i,j,k,l,...z] = a;
    r1.push( (e+g), (f+h) );
    r1.push( (i+k), (j+l) );
    r1.push( ...z ); 
   }
   else if(a.length == 6)
   {
    let [e,f,g,h,...z] = a;
    r1.push( (e+g), (f+h) );
    r1.push( ...z ); 
   }
   else if(a.length == 4)
   {
    let [e,f,g,h] = a;
    r1.push( (e+g), (f+h) );
   }
   else if(a.length == 2)
   {
    let [e,f] = a;
    r1.push( (e+f) );
   }
    return r1;
}
let res = sum(input)
console.log(res);
let res1 = sum(res);
console.log(res1);
let res2 = sum(res1)
console.log(res2);
let res3 = sum(res2);
console.log(res3);