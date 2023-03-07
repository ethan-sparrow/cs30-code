// Cubic Dissarray
// March 7, 2023

let boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);

  for (let y = 0; y < height/50; y++) {
    for (let x = 0; x < width/50; x++) {
      spawnBox(x*50, y*50, 50, random(y*5, -y*5));
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < boxes.length; i++) {
    displayBoxes(boxes[i]);
  }
}

function displayBoxes(drawnBox) {
  push();
  translate(drawnBox.x, drawnBox.y);
  rotate(drawnBox.rotation);
  square(0, 0, drawnBox.size);
  pop();
}

function spawnBox(boxX, boxY, boxSize, boxRotation) {
  let someBox = {
    x: boxX,
    y: boxY,
    size: boxSize,
    rotation: boxRotation,
  };
  boxes.push(someBox);
}
