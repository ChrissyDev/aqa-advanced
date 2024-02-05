function calculateRectangleAreaDeclaration(width, height) {
    return width * height;
}
console.log(calculateRectangleAreaDeclaration(7, 21));

let calculateRectangleAreaExpression = function(width, height) {
    return width * height;
};
console.log(calculateRectangleAreaExpression(7, 21));

const calculateRectangleAreaArrow = (width, height) => width * height;
console.log(calculateRectangleAreaArrow(7, 21));