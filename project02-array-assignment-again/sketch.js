// Array assignment (2nd try)
// Ethan/Sparrow Kimble
// March 15th, 2023
//
// Extra for Experts:
// drawing and moving in 3D

let rings = [];
let globalX = 0;
let globalY = 0;
let globalZ = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  //spawn the initial 5 rings
  spawnRing(random(-100, 100), random(-100, 100), 400);
  spawnRing(random(-100, 100), random(-100, 100), 0);
  spawnRing(random(-100, 100), random(-100, 100), -400);
  spawnRing(random(-100, 100), random(-100, 100), -800);
  spawnRing(random(-100, 100), random(-100, 100), -1200);
}

function draw() {
  background(220);
  playerInput();
  moveRings();
  for(let i = 0; i < rings.length; i++) {
    positionRings(rings[i]);
  }
  addRings();
}

function playerInput(){
  // lets the player move the X and Y
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

function moveRings() {
  // the speed of rings moving twoards the screen
  globalZ += 5;
}

function positionRings(ring) {
  // translates the position for each ring
  push();
  translate(globalX + ring.x, globalY + ring.y, globalZ + ring.z);
  torus (100, 20, 50, 50);
  pop();
}

function addRings() {
  //adds news rings and removes them once they are past the screen
  if (globalZ + rings[0].z > 800) {
    rings.shift()
    spawnRing(random(-100, 100), random(-100, 100), rings[rings.length - 1].z - 400)
  }
}

function spawnRing(ringX, ringY, ringZ) {
  // spawns a new ring with x y and z. x and y are randomized when called, z is 400 more than the last
  let someRing = {
    x: ringX,
    y: ringY,
    z: ringZ,
  };
  rings.push(someRing);
}