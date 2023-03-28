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
    grid[y][x] = "empty";
  }
  if (mouseIsPressed) {
    grid[y][x] = "wall";
  }
  if ( key === "p" && keyIsPressed) {
    grid[y][x] = "player";
  }
  if ( key === "b" && keyIsPressed) {
    grid[y][x] = "box";
  }
  if ( key === "v" && keyIsPressed) {
    grid[y][x] = "verticalRail";
  }
  if ( key === "h" && keyIsPressed) {
    grid[y][x] = "horizontalRail";
  }
  if (key === "r" && keyIsPressed) {
    grid = createEmpty2dArray(ROWS, COLS);
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

  if ( key === "a"  && keyIsPressed) {
    movingX = -1;
  } 
  else if (key === "d" && keyIsPressed) {
    movingX = 1;
  }
  else {
    movingX = 0;
  }
}

function moveThings(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === "player" && frameCount % 5 === 0) {
        if (movingY !== 0 || movingX !== 0) {
          if (grid[y + movingY][x + movingX] === "empty") {
            grid[y][x] = "toBeEmpty";
            grid[y + movingY][x + movingX] = "toBePlayer";
          }
          if (grid[y + movingY][x + movingX] === "box") {
            if (grid[y + movingY * 2][x + movingX * 2] === "empty") {
              grid[y][x] = "toBeEmpty";
              grid[y + movingY][x + movingX] = "toBePlayer";
              grid[y + movingY * 2][x + movingX * 2] = "toBeBox";
            }
            else {
              return;
            }
            
          }
          if (grid[y + movingY][x + movingX] === "verticalRail") {
            grid[y][x] = "toBeEmpty";
            grid[y + movingY][x + movingX] = 106;
          }
        }
      }
      
    }
  }
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === "toBeEmpty") {
        grid[y][x] = "empty";
      }
      if (grid[y][x] === "toBePlayer") {
        grid[y][x] = "player";
      }
      if (grid[y][x] === "toBeBox") {
        grid[y][x] = "box";
      }
    }
  }
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === "empty") {
        fill("pink");
      }
      if (grid[y][x] === "wall") {
        fill("purple");
      }
      if (grid[y][x] === "player") {
        fill("grey");
      }
      if (grid[y][x] === "box") {
        fill("blue");
      }
      if (grid[y][x] === "verticalRail") {
        fill("yellow");
      }
      if (grid[y][x] === "horizontalRail") {
        fill("orange");
      }
      if (grid[y][x] === "upBird") {
        fill("grey");
      }
      if (grid[y][x] === "downBird") {
        fill("grey");
      }
      if (grid[y][x] === "leftBird") {
        fill("grey");
      }
      if (grid[y][x] === "rightBird") {
        fill("grey");
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
      newGrid[y].push("empty");
    }
  }
  return newGrid;
}