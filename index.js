const inquirer = require('inquirer');
const express = require('express');
const fs = require('fs');

class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error('render() method must be implemented by subclass');
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200">
              <circle cx="150" cy="100" r="50" fill="${this.color}" />
            </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200">
              <polygon points="150,20 280,180 20,180" fill="${this.color}" />
            </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200">
              <rect width="200" height="200" fill="${this.color}" />
            </svg>`;
  }
}

class SvgMaker {
  constructor() {
    this.userInput = null;
  }

  async getUserInput() {
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

  generateSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
    let shapeInstance;

    switch (shape) {
      case 'circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'square':
        shapeInstance = new Square(shapeColor);
        break;
      default:
        throw new Error('Invalid shape');
    }

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <style>
          text {
            fill: ${textColor};
            font-size: 20px;
          }
          
          .shape {
            fill: ${shapeColor};
          }
        </style>
        ${shapeInstance.render()}
        <text x="50" y="60" text-anchor="middle">${text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }

  startServer() {
    const app = express();
    app.use(express.static(__dirname));
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  }

  async run() {
    try {
      const userInput = await this.getUserInput();
      this.generateSVG(userInput);
      this.startServer();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}

const svgMaker = new SvgMaker();
svgMaker.run();