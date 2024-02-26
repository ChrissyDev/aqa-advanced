const numbers = [3, 7, 17, 21, 44];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of array elements:", sum);