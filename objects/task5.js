const users = [
    { name: "James Clear", email: "jamesclear@gmail.com", age: 38 },
    { name: "Thor Odinson", email: "thorodinson@asgard.com", age: 1224 },
    { name: "Zeus", email: "zeus@olympus.com", age: 13800000000 }
];

for (const { name, email, age } of users) {
    console.log("Name:", name, "Email:", email, "Age:", age);
}