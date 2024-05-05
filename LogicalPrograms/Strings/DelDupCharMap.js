function removeDuplicateLetters(str) {
    // Create a Map to track the number of times each letter appears in the string.
    const map = new Map();
  
    // Iterate over the string and add each letter to the Map.
    for (const letter of str) {
      if (map.has(letter)) {
        // If the letter already exists in the Map, increment its count.
        map.set(letter, map.get(letter) + 1);
      } else {
        // If the letter does not exist in the Map, add it with a count of 1.
        map.set(letter, 1);
      }
    }
    // Create a new string to store the unique letters.
    const uniqueString = [];
  
    // Iterate over the Map and add each letter to the new string if its count is 1.
    for (const [letter, count] of map) {
      if (count === 1) {
        uniqueString.push(letter);
      }
    }
    // Return the new string.
    return uniqueString.join("");
  }
  
  // Example usage:
  const str = "parameters";
  const uniqueString = removeDuplicateLetters(str);
  console.log(uniqueString); // "helowrd"