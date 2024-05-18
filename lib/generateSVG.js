// lib/generateSVG.js

const { Triangle, Circle, Square } = require('./shapes'); // Import shape classes

// Function to generate the SVG content based on user input
function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeInstance;
    // Create an instance of the selected shape
    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle();
            break;
        case 'Triangle':
            shapeInstance = new Triangle();
            break;
        case 'Square':
            shapeInstance = new Square();
            break;
    }
    // Set the color of the shape
    shapeInstance.setColor(shapeColor);

    // Return the SVG content as a string
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
    `;
}

// Export the generateSVG function
module.exports = generateSVG;
