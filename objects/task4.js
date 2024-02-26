const person = {
    firstName: "James",
    lastName: "Clear",
    age: 38
};

person.email = "jamesclear@gmail.com";
delete person.age;
console.log(person);