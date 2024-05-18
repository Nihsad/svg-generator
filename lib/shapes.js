// Define a base class 'Shape' that other shapes will extend
class Shape {
    // Constructor initializes the color property
    constructor() {
        this.color = ''; // Initialize color as an empty string
    }

    // Method to set the color of the shape
    setColor(color) {
        this.color = color; // Assign the provided color to the shape's color property
    }
}

// Define a 'Triangle' class that extends the 'Shape' class
class Triangle extends Shape {
    // Method to render the triangle as an SVG element
    render() {
        // Return an SVG string for a triangle with the specified color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Define a 'Circle' class that extends the 'Shape' class
class Circle extends Shape {
    // Method to render the circle as an SVG element
    render() {
        // Return an SVG string for a circle with the specified color
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Define a 'Square' class that extends the 'Shape' class
class Square extends Shape {
    // Method to render the square as an SVG element
    render() {
        // Return an SVG string for a square with the specified color
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}

// Export the shape classes to be used in other modules
module.exports = { Triangle, Circle, Square };
