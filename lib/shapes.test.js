// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

describe('Shape rendering', () => {
    test('Triangle renders correctly', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Circle renders correctly', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('Square renders correctly', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toBe('<rect x="75" y="25" width="150" height="150" fill="green" />');
    });
});
