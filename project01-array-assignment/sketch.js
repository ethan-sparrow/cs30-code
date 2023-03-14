// Caulkboard Bands
// Ethan/Sparrow Kimble
// March 9th 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pins = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  spawnPin(100, 100);

  for (let i = 0; i < pins.length; i++) {
    movePin(pins[i]);
    displayPin(pins[i]);
  }
}

function movePin(currentPin, mouseOnPin) { 
  if (mouseX > currentPin.x - 50 && mouseX < currentPin.x + 50 && mouseY > currentPin.y - 50 && mouseY < currentPin.y + 50 && mouseIsPressed) {
    currentPin.x = mouseX;
    currentPin.y = mouseY;
  }
}

function displayPin(currentPin) {
  circle (currentPin.x, currentPin.y, 100);
}

function spawnPin(pinX, pinY) {
  let somePin = {
    x: pinX,
    y: pinY,
  };
  pins.push(somePin);
}