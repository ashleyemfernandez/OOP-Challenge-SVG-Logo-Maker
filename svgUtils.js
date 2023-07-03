function createSVG(text, textColor, shape, shapeColor) {
    let svgContent = `<svg width="300" height="200">`;
  
    if (shape === 'circle') {
      svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
      svgContent += `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
      svgContent += `<rect width="200" height="200" fill="${shapeColor}" />`;
    }
  
    svgContent += `<text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>`;
    svgContent += `</svg>`;
  
    return svgContent;
  }
  
  module.exports = { createSVG };
  