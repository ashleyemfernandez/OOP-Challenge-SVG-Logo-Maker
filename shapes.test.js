//const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

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
  
  module.exports = {
    Shape,
    Circle,
    Triangle,
    Square,
  };
  