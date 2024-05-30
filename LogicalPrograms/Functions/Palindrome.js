function palindrome(a)
{
    return a === a.split("").reverse().join("");
}
let inp = "racecar";
let res = palindrome(inp);
console.log(res);