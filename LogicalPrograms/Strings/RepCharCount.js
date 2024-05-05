function printRepeatedCharacterCount(str) {
    str = str.toLowerCase();
    // Initialize an object to store the occurrence count for each character
    let occurrences = {};

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is already in the occurrences object
        if (occurrences[char]) {
            // If it exists, increment its count
            occurrences[char]++;
        } else {
            // If it doesn't exist, initialize its count to 1
            occurrences[char] = 1;
        }
    }

    // Filter out characters with occurrence count less than 2 (i.e., repeated characters)
    let repeatedCharacters = Object.keys(occurrences).filter(char => occurrences[char] > 1);

    // Print the occurrence count for each repeated character
    repeatedCharacters.forEach(char => {
        console.log(`Character '${char}' occurs ${occurrences[char]} times.`);
    });
}

let inputString = "HelloWorld";
console.log("Repeated character counts:");
printRepeatedCharacterCount(inputString);
