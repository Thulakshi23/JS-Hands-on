const userInput = prompt("Enter a year:");

// Convert the input to a number
const year = Number(userInput);

// Check if the input is a valid number
if (!isNaN(year), Number.isInteger(year), year > 0) {
    // Check if the year is a leap year
    if (year % 4 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
} else {
    console.log("Please enter a valid positive integer for a year.")
}