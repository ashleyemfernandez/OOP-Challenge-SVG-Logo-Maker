const inquirer = require('inquirer');
const express = require('express');
const fs = require('fs');
const { createSVG } = require('./svgUtils'); 

async function getUserInput() {
  const userInput = await inquirer.prompt([
    {
      name: 'text',
      message: 'Up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ]);

  return userInput;
}

function generateSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;
  const svgContent = createSVG(text, textColor, shape, shapeColor);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

async function run() {
  try {
    const userInput = await getUserInput();
    generateSVG(userInput);

    const app = express();
    app.use(express.static(__dirname));
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();
