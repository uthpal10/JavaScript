function removeVowels(str) {
    str = str.toLowerCase();
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';

    // Use the replace method with a regular expression to remove vowels
    let result = str.replace(new RegExp(`[${vowels}]`, 'g'), '');

    // Print the string without vowels
    console.log(result);
}

// Example usage:
let inputString = "HelloHowAreYou";
removeVowels(inputString); // Output: Hll, hw r y?
