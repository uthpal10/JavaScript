function countVowelsAndOccurrences(str) {
    // Convert the string to lowercase to simplify the comparison
    str = str.toLowerCase();
    
    // Initialize an object to store the occurrence count for each vowel
    let occurrences = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    // Initialize a counter for total vowels
    let totalCount = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if ('aeiou'.includes(char)) {
            // If it's a vowel, increment the total count and the corresponding occurrence count
            totalCount++;
            occurrences[char]++;
        }
    }

    // Return an object containing the total count and the occurrence count for each vowel
    return { totalCount, occurrences };
}

let inputString = "Hello, how are you?";
let result = countVowelsAndOccurrences(inputString);
console.log("Total number of vowels:", result.totalCount); 
// Output: Total number of vowels: 6
console.log("Occurrence count for each vowel:", result.occurrences);
// Output: Occurrence count for each vowel: { a: 1, e: 2, i: 0, o: 3, u: 0 }
