function countOccurrences(str) 
{
    str = str.toLowerCase();

    // Initialize an object to store the occurrence count for each character
    let occurrences = {};

    // Loop through each character in the string
    for (let char of str) 
    {
        // Check if the character is already in the occurrences object
        if (occurrences[char]) 
        {
            // If it exists, increment its count
            occurrences[char]++;
        } 
        else 
        {
            // If it doesn't exist, initialize its count to 1
            occurrences[char] = 1;
        }
    }

    // Return the object containing the occurrence count for each character
    return occurrences;
}

// Example usage:
let inputString = "HelloWorld";
let result = countOccurrences(inputString);
console.log("Occurrence count for each character:", result);
// Output: Occurrence count for each character: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
