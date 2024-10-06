
let a = 5;
let b = 10;

console.log("Before swapping:");
console.log(a);
console.log(b); 

// Swap using array
[a, b] = [b, a];

console.log("After swapping:");
console.log(a); 
console.log(b); 

   



    const fconst = 10;
      fconst = 20;
      console.log(fconst);





const str = "42";
const num = Number(str);
console.log(num);
console.log(typeof num);




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






const userInput = prompt("Enter a number:");

// Convert the input to a number
const number = Number(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
    // Check if the number is positive, negative, or zero
    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log(`${number} is zero.`);
    }
} else {
    console.log("Please enter a valid number.");
}






const userInput = prompt("Enter a year:");

// Convert the input to a number
const year = Number(userInput);

// Check if the input is a valid number
if (!isNaN(year), Number.isInteger(year), year > 0) {
    // Check if the year is a leap year
    if (year % 4 === 0,) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
} else {
    console.log("Please enter a valid positive integer for a year.");
}





const userInput = prompt("Enter a number:");

// Convert the input to a number
const number = Number(userInput);

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







function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`The larger number is: ${num1}`);
    } else if (num2 > num1) {
        console.log(`The larger number is: ${num2}`);
    } else {
        console.log("Both numbers are equal.");
    }
}

// Get input from the user
const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));

// Compare the numbers
compareNumbers(number1, number2);











