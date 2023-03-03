// Generative art
// March 3rd

let direction = 1;
let slope = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  lineGrid(100, 100);
}

function draw() {
  
}

function lineGrid(cols, rows) {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let spaceAmount = width/cols;
      diagonalLine(x*spaceAmount, y*spaceAmount, spaceAmount)
    }
  }
}

function diagonalLine(x, y, spacing) {
  if (random(100) > 50) {
    direction *= -1;
  }
  line(x - spacing/slope, y + spacing/slope*direction, x + spacing/slope, y - spacing/slope*direction);
}