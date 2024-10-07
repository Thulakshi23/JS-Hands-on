const userInput = prompt("Enter a number:");

// Convert the input to a number
const number = Number(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
    // Check if the number is even or odd
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
} else {
    console.log("Please enter a valid number.");
}