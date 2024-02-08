function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0) {
        throw new Error("Invalid data: the denominator can't be zero & both arguments should be numeric");
    }
    return numerator / denominator;
}

try {
    console.log(divide(21, 3));
    console.log(divide(21, 0));
    console.log(divide(7, 'seven'));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}