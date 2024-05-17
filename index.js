const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: input => input.length <= 3 || 'Text must be up to three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hexadecimal number for the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hexadecimal number for the shape color:',
  },
];

inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);
  fs.writeFile('logo.svg', svgContent, err => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;
  switch (shape) {
    case 'circle':
      shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeElement = `<polygon points="150,10 290,190 10,190" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeElement = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
      break;
  }

  const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      ${textElement}
    </svg>
  `;
}
