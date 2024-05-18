// Import necessary modules
const fs = require('fs'); // File system module for file operations
const path = require('path'); // Path module for handling file paths
const generateSVG = require('./lib/generateSVG'); // Import the generateSVG function

(async () => {
    // Dynamically import 'inquirer' to handle user prompts
    const inquirer = (await import('inquirer')).default;

    // Define the questions to ask the user
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            // Validate that the input is up to three characters
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
            choices: ['Circle', 'Triangle', 'Square'], // Provide shape choices
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ];

    // Prompt the user with the defined questions
    inquirer.prompt(questions).then(answers => {
        // Generate the SVG content based on user answers
        const svgContent = generateSVG(answers);

        // Define the file path for the generated logo in the main folder
        const filePath = path.join(__dirname, 'logo.svg');
        // Write the SVG content to the file
        fs.writeFileSync(filePath, svgContent);
        // Log a success message
        console.log(`Logo generated in ${filePath}`);
    });
})();
