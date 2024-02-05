const number = 7;

console.log("Multiplication table for", number, "using for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Using while loop:
console.log("\nMultiplication table for", number, "using while loop:");
let j = 1;
while (j <= 10) {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
}
