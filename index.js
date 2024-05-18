const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

(async () => {
    const inquirer = (await import('inquirer')).default;

    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 || 'Text must be up to 3 characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ];

    function generateSVG({ text, textColor, shape, shapeColor }) {
        let shapeInstance;
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
        shapeInstance.setColor(shapeColor);

        return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
        `;
    }

    inquirer.prompt(questions).then(answers => {
        const svgContent = generateSVG(answers);

        // Ensure the 'examples' directory exists
        const outputDir = path.join(__dirname, 'examples');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        // Write the file to the 'examples' directory
        const filePath = path.join(outputDir, 'logo.svg');
        fs.writeFileSync(filePath, svgContent);
        console.log(`Logo generated in ${filePath}`);
    });
})();
