const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const circle = new Circle('red');
const triangle = new Triangle('green');
const square = new Square('blue');

console.log('Circle SVG:');
console.log(circle.render());

console.log('Triangle SVG:');
console.log(triangle.render());

console.log('Square SVG:');
console.log(square.render());

