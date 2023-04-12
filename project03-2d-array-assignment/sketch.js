// Sokubon demo
// Ethan Sparrow Kimble
// April 5th, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 30;
const COLS = 30;
let grid;
let cellSize;
let movingY = 0;
let movingX = 0;
let currentLevel = 0;
let levels = [];
let levelMaking = false;

function preload() {
  levels.push(loadJSON("level0.json"));
  levels.push(loadJSON("level1.json"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadLevel();

  if (width < height) {
    cellSize = width/COLS;
  }
  else {
    cellSize = height/ROWS;
  }
}

function draw() {
  keyboardInput();
  moveThings(grid);
  displayGrid(grid);
}

function keyboardInput() {
  //for editing purposes
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  if (key === "`" && keyIsPressed) {
    levelMaking = true;
  }
  
  if (levelMaking) {
    if ( key === "e" && keyIsPressed) {
      grid[y][x].bottomLayer = "ground";
      grid[y][x].topLayer = "empty"; 
    }
    if (mouseIsPressed) {
      grid[y][x].topLayer = "wall";
    }
    if ( key === "p" && keyIsPressed) {
      grid[y][x].topLayer = "player";
    }
    if ( key === "b" && keyIsPressed) {
      grid[y][x].topLayer = "box";
    }
    if ( key === "h" && keyIsPressed) {
      grid[y][x].bottomLayer = "hole";
    }
  }
  
  
  //player input
  

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
  //determine where everything moves using temporary variables
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      //player movement, framecount restriction because otherwise theyd move too fast
      if (grid[y][x].topLayer === "player" && frameCount % 5 === 0 && (movingY !== 0 || movingX !== 0)) {
        if (grid[y + movingY][x + movingX].topLayer !== "wall" && grid[y + movingY][x + movingX].topLayer !== "player") {

          //box pushing movement
          if (grid[y + movingY][x + movingX].topLayer === "box" && grid[y + movingY * 2][x + movingX * 2].topLayer === "empty") {
            if (grid[y][x].toBe === "none"){
              grid[y][x].toBe = "toBeEmpty";
            }
            grid[y + movingY][x + movingX].toBe = "toBePlayer";
            if (grid[y + movingY * 2][x + movingX * 2].bottomLayer === "ground") {
              grid[y + movingY * 2][x + movingX * 2].toBe = "toBeBox";
            }
            if (grid[y + movingY * 2][x + movingX * 2].bottomLayer === "hole") {
              grid[y + movingY * 2][x + movingX * 2].toBe = "toBeGround";
            }
          }
          
          //empty space movemnt
          if (grid[y + movingY][x + movingX].bottomLayer === "ground" && grid[y + movingY][x + movingX].topLayer === "empty") {
            if (grid[y][x].toBe === "none"){
              grid[y][x].toBe = "toBeEmpty";
            }
            grid[y + movingY][x + movingX].toBe = "toBePlayer";
          }
          if (grid[y + movingY][x + movingX].bottomLayer === "hole") {
            if (grid[y][x].toBe === "none"){
              grid[y][x].toBe = "toBeEmpty";
            }
            grid[y + movingY][x + movingX].toBe = "toBeGround";
          }
        }
      }
    }
  }
  let remainingHoles = 0;

  //changes temorary variables to real ones
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x].toBe === "toBePlayer") {
        grid[y][x].topLayer = "player";
        grid[y][x].toBe = "none";
      }
      if (grid[y][x].toBe === "toBeBox") {
        grid[y][x].topLayer = "box";
        grid[y][x].toBe = "none";
      }
      if (grid[y][x].toBe === "toBeEmpty") {
        grid[y][x].topLayer = "empty";
        grid[y][x].toBe = "none";
      }
      if (grid[y][x].toBe === "toBeGround") {
        grid[y][x].bottomLayer = "ground";
        grid[y][x].toBe = "none";
      }
      
      //tracks the holes left in the level and finishes the level when its done
      if (grid[y][x].bottomLayer === "hole") {
        remainingHoles++;
      }
    }
  }
  if (remainingHoles === 0 && levelMaking === false) {
    currentLevel++;
    loadLevel();
  }
}

function displayGrid(grid) {
  //colours every cell
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x].bottomLayer === "ground") {
        fill("pink");
      }
      if (grid[y][x].bottomLayer === "hole") {
        fill("black");
      }
      if (grid[y][x].topLayer === "wall") {
        fill("purple");
      }
      if (grid[y][x].topLayer === "player") {
        fill("grey");
      }
      if (grid[y][x].topLayer === "box") {
        fill("blue");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createEmpty2dArray(ROWS, COLS) {
  //leftover / used for level creation
  
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      let emptyCell = {
        bottomLayer: "ground",
        topLayer: "empty",
        toBe: "none",
      };
      newGrid[y].push(emptyCell);
    }
  }
  return newGrid;
}

function keyPressed() {
  if (key === ".") {
    saveJSON(grid, "level");
  }
}

function loadLevel() {
  //loads the next level
  grid = levels[currentLevel];
}

