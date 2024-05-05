function multiple(num)
{
    if(num % 5 ===0 && num % 10 === 0)
        {
            console.log(`${num} is a multiple of 5 and 10`);
        }
        else
        {
            console.log(`${num} is not a multiple of 5 and 10`);
        }
}
const input = 70;
multiple(input);
