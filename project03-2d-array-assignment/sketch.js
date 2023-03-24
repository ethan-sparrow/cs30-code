// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 30;
const COLS = 30;
let grid;
let cellSize;
let dy = 0;
let dx = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2dArray(ROWS, COLS);

  if (width < height) {
    cellSize = width/COLS;
  }
  else {
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  keyboardInput();
  moveThings(grid);
  displayGrid(grid);
}

function keyboardInput() {
  //for editing purposes
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  if ( key === "e" && keyIsPressed) {
    grid[y][x] = 0;
  }
  if (mouseIsPressed) {
    grid[y][x] = 1;
  }
  if ( key === "p" && keyIsPressed) {
    grid[y][x] = 2;
  }
  if ( key === "b" && keyIsPressed) {
    grid[y][x] = 3;
  }
  

  //player movement
  if ( keyIsDown === "w") {
    dy = -1;
  }
  else {
    dy = 0;
  }
}

function moveThings(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 2) {
        if (dy !== 0) {
          // make it remeber what it was (properties?)
          grid[y][x] = 0;
        }
      }
    }
  }
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 0) {
        fill("pink");
      }
      if (grid[y][x] === 1) {
        fill("purple");
      }
      if (grid[y][x] === 2) {
        fill("grey");
      }
      if (grid[y][x] === 3) {
        fill("blue");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createEmpty2dArray(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}