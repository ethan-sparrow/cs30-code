// Array assignment (2nd try)
// Ethan/Sparrow Kimble
// March 15th, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rings = [];
let globalX = 0;
let globalY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  spawnRing(50, 0, 100);
  spawnRing(0, 100, 0)
}

function draw() {
  background(220);
  playerInput();
  for(let i = 0; i < rings.length; i++) {
    moveRings(rings[i]);
    drawRings();
  }
}

function playerInput(){
  if (keyIsDown(LEFT_ARROW)) {
    globalX += 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    globalX -= 3;
  }
  if (keyIsDown(UP_ARROW)) {
    globalY += 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    globalY -= 3;
  }
}

function moveRings(ring) {
  ring.z += 2;
  let x = globalX + ring.x;
  let y = globalY + ring.y;
  translate(x, y, ring.z);
}

function drawRings() {
  
  torus (100, 20, 50, 50);
}

function spawnRing(ringX, ringY, ringZ) {
  let someRing = {
    x: ringX,
    y: ringY,
    z: ringZ,
  };
  rings.push(someRing);
}