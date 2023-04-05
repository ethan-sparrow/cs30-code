// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 40;
const COLS = 40;
let grid;
let cellSize;
let autoUpdate = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray(ROWS, COLS);

  //fill the largest square area possible...
  if (width < height) {
    cellSize = width/COLS;
  }
  else {
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  if (autoUpdate && frameCount % 10 === 0) {
    grid = updateGrid();
  }
  displayGrid(grid);
}

function keyTyped() {
  if ( key === "r") {
    grid = createRandom2dArray(ROWS,COLS);
  }
  if ( key === "e") {
    grid = createEmpty2dArray(ROWS,COLS);
  }
  if ( key === " ") {
    grid = updateGrid();
  }
  else if (key === "a") {
    autoUpdate = !autoUpdate;
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);
}

function updateGrid() {
  let nextGen = createEmpty2dArray(ROWS, COLS);

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      
      let neighbours = 0;
      
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //edge cases
          if (y+i >= 0 && y+i < ROWS && x+j >= 0 && x+j < COLS) {
            neighbours+=grid[y+i][x+j];
          }
        }
      }
      //dont count slef
      neighbours -= grid[y][x];

      if (grid[y][x] === 1) {
        if (neighbours === 2 || neighbours === 3) {
          nextGen[y][x] = 1;
        }
        else {
          nextGen[y][x] = 0;
        }
      }

      if (grid[y][x] === 0) {
        if (neighbours === 3) {
          nextGen[y][x] = 1;
        }
        else {
          nextGen[y][x] = 0;
        }
      }
    }
  }
  return nextGen;
}

function toggleCell(x, y) {
  //sanity check
  if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 0) {
        fill("orange");
      }
      if (grid[y][x] === 1) {
        fill("blue");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      if (random(100) > 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
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