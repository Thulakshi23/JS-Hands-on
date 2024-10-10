function lengthOfLongestSubstring(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let seenChars = new Set(); // To track characters in the current substring
        for (let j = i; j < s.length; j++) {
            if (seenChars.has(s[j])) {
                // If a repeating character is found, break out of the loop
                break;
            }
            seenChars.add(s[j]); // Add the character to the set
            maxLength = Math.max(maxLength, j - i + 1); // Update maxLength
        }
    }

    return maxLength;
}

const inputString = "abcabcbb";
const result = lengthOfLongestSubstring(inputString);
    console.log(result); // Output: 3 (the longest substring is "abc")
