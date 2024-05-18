// Import the shape classes from the 'shapes' module
const { Triangle, Circle, Square } = require('./shapes');

// Describe block for grouping related tests for shape rendering
describe('Shape rendering', () => {
    // Test case for rendering a triangle
    test('Triangle renders correctly', () => {
        // Create a new Triangle instance
        const shape = new Triangle();
        // Set the color of the triangle to blue
        shape.setColor('blue');
        // Assert that the rendered output matches the expected SVG string
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    // Test case for rendering a circle
    test('Circle renders correctly', () => {
        // Create a new Circle instance
        const shape = new Circle();
        // Set the color of the circle to red
        shape.setColor('red');
        // Assert that the rendered output matches the expected SVG string
        expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    // Test case for rendering a square
    test('Square renders correctly', () => {
        // Create a new Square instance
        const shape = new Square();
        // Set the color of the square to green
        shape.setColor('green');
        // Assert that the rendered output matches the expected SVG string
        expect(shape.render()).toBe('<rect x="75" y="25" width="150" height="150" fill="green" />');
    });
});
