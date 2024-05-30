let inp = "racecar";
function palin(s)
{
    return s.toLowerCase() == s.toLowerCase().split("").join("");
}
let res = palin(inp);
console.log(res);