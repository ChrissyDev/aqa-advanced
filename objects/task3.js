const car1 = {
    brand: "Audi",
    model: "A6",
    year: 2015
};

const car2 = {
    brand: "Volvo",
    model: "XC90",
    owner: "James"
};

const car3 = { ...car1, ...car2 };
console.log(car3);