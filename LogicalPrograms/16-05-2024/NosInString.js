let s1 = "abc1234bd45ef5gh6789";

// let res = [];
// let ec = "";

// for(let i=0; i<s1.length; i++)
// {
//     if(!isNaN(parseInt(s1[i])))
//     {
//         ec += s1[i];
//     }
//     else
//     {
//         if(ec.length >= 1)
//         {
//             res.push(ec);
//         }
//         ec = "";
//     }
// }
// if(ec.length > 1)
// {
//     res.push(ec);
// }
// console.log(...res.reverse());
// for(let i=res.length-1; i>=0; i--)
// {
//     process.stdout.write(res[i]+ " ");
// }

// for(let i=s1.length-1; i>=0; i--)
// {
//    console.log(s1[i] + " ");
// }

let s2 = s1.split(/\D+/);
for(let i=s2.length-1; i>=0; i--)
{
    process.stdout.write(s2[i]+ " ");
} 