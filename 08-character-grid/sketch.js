// character move in grid
// Your Name
// 27th ,march
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
const ROWS = 10;
const COLS = 10;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createRandomGrid(ROWS, COLS);
  
  if (width < height) {
    cellSize = width/ROWS;
  } 
  else {
    cellSize = height/COLS;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill ("black");
      }
      else if (grid[y][x] === 0) {
        fill ("white");
      }
      rect (x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}
