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
let movingY = 0;
let movingX = 0;

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
  if ( key === "w"  && keyIsPressed) {
    movingY = -1;
  } 
  else if (key === "s" && keyIsPressed) {
    movingY = 1;
  }
  else {
    movingY = 0;
  }
}

function moveThings(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 2 && movingY !== 0 && frameCount % 5 === 0) {
        if (grid[y + movingY][x] === 0) {
          grid[y][x] = 0;
          grid[y + movingY][x] = 102;
        }
      }
    }
  }
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 102) {
        grid[y][x] = 2;
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