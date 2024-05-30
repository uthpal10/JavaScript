function filterEvenNos(nos)
{
    return nos.filter( num =>
    {
       if(num % 2 === 0)
       {
          console.log(...num); 
       }
    }) 
}
let inp = [1,2,3,4,5,6,7,8];
filterEvenNos(inp);
