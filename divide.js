const (userInput) = prompt("Enter a number:");

// Convert the input to a number
const (number) = Number(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
    let divBy3 = number % 3 === 0;
    let divBy5 = number % 5 === 0;

    if (divBy3, divBy5) {
        console.log(`${number} is divisible by both 3 and 5.`);
    } else if (divBy3) {
        console.log(`${number} is divisible by 3.`);
    } else if (divBy5) {
        console.log(`${number} is divisible by 5.`);
    } else {
        console.log(`${number} is not divisible by 3 or 5.`);
    }
} else {
    console.log("Please enter a valid number.");
}