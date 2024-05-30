function isPalindrome(s)
{
    let remove = s.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
    console.log(remove);
    
    let reverse = remove.toLowerCase().split("").reverse().join("");
    console.log(reverse);
    
    return remove === reverse;
}
let inp = "1&23R#acEca  r321";
let res = isPalindrome(inp);
console.log(res);