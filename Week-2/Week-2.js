// Task 1: Declare a variable age and check if it's adult
let age = 25;
let isAdult = age >= 18;
console.log("Is Adult:", isAdult);


// Task 2: Perform operations on x and y
let x = 10;
let y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);


// Task 3: Check if a number is even or odd
let n = 7;       // Change the value of n to test
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log("Number is:", result);



// Task 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Numbers Array:", numbers);


// Task 5: Function to return the square of a number
function square(num) {
    return num * num;
}
console.log("Square of 4:", square(4));     // Example 
