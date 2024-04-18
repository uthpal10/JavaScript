const arr = [10, 6, 9, 40, 27, 50]

let divBy3 = 0;
let divBy5 = 0;
let divBy3And5 = 0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i]%3==0)
    {
        divBy3++;
    }
    else
    //if(arr[i]%5==0)
    {
        divBy5++;
    }
    if(arr[i]%3==0|arr[i]%5==0)
    {
        divBy3And5++;
    }
}
console.log(" Numbers divisible by 3 is " + divBy3);
console.log(" Numbers divisible by 5 is " + divBy5);
console.log(" Numbers divisible by both 3 & 5 is " + divBy3And5);