// terrain gen and perlin noise
// March 14, 2023

let terrain = [];
let xOff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
}

function draw() {
  background(220);
  moveScreen();
  terrainDisplay();
  
}

function moveScreen() {
  if (keyIsDown(RIGHT_ARROW)) {
    xOff+= 5;
  }
  if (keyIsDown(LEFT_ARROW) && xOff > 0) {
    xOff-= 5;
  }
}

function terrainDisplay() {
  for (let i = xOff; i< xOff + width; i++) {
    rect(i - xOff, height - terrain[i].height, 1, terrain[i].height);
  }
}

function spawnRectangles() {
  let time = 0;
  for (let x = 0; x < width * 100; x++) {
    let terrainHeight = noise(time) * height;
    let thisRect = {
      x: x,
      height: terrainHeight,
    }
    terrain.push(thisRect);
    time += 0.003;
  }
}