// svgUtils.js

function createSVG(text, textColor, shape, shapeColor) {
  const svg = `
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
      <rect class="shape" width="100" height="100" />
      <text x="50" y="60" text-anchor="middle">${text}</text>
    </svg>
  `;

  return svg;
}

module.exports = {
  createSVG,
};
