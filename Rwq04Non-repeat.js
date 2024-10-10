function firstNonRepeatingCharacter(s) {
    const charCount = new Map(); // To store character counts

    // Count occurrences of each character
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first non-repeating character
    for (const char of s) {
        if (charCount.get(char) === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // Return null if there is no non-repeating character
}


const inputString = "swiss";
const result = firstNonRepeatingCharacter(inputString);
    console.log(result);
