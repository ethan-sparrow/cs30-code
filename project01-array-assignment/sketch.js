// Caulkboard Bands
// Ethan/Sparrow Kimble
// March 9th 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pins = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnPin(100, 100);
  spawnPin(200, 200);
  spawnPin(300, 100);

}

function draw() {
  background(220);
  
  for (let i = 0; i < pins.length; i++) {
    movePin(pins[i]);
    displayPin(pins[i]);
  }
  displayBand();
}

function movePin(currentPin) { 
  if (mouseX > currentPin.x - 50 && mouseX < currentPin.x + 50 && mouseY > currentPin.y - 50 && mouseY < currentPin.y + 50 && mouseIsPressed) {
    currentPin.x = mouseX;
    currentPin.y = mouseY;
  }
}

function keyPressed() {
  spawnPin(mouseX, mouseY);
}

function displayPin(currentPin) {
  circle (currentPin.x, currentPin.y, 100);
}

function displayBand() {
  for (let i = 0; i < pins.length-1; i++) {
    line (pins[i].x, pins[i].y, pins[i+1].x, pins[i+1].y);
  }
  line (pins[0].x, pins[0].y, pins[pins.length-1].x, pins[pins.length-1].y);
}

function spawnPin(pinX, pinY) {
  let somePin = {
    x: pinX,
    y: pinY,
  };
  pins.push(somePin);
}
