// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rings = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  spawnRing(0, 0, 100)
}

function draw() {
  background(220);
  
  drawRings();
}

function drawRings() {
  for
}

function spawnRing(ringX, ringY, ringZ) {
  let someRing = {
    x: ringX,
    y: ringY,
    z: ringZ,
  };
  rings.push(someRing);
}