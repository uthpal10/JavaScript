function removeDuplicates(inputStr) 
{
    let result = [];
    let seen = new Set();
    for (let char of inputStr) 
    {
        if (!seen.has(char)) 
        {
            seen.add(char);
            // result += char;
            result.push(char)
        }
    }
    return result;
}

let inputString = "parameters";
let outputString = removeDuplicates(inputString);
console.log("output: "+ outputString); // Output: "helo"