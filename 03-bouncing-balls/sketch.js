// Bouncing Balls
// Using Arrays and Object Notation

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2, height/2);
}

function draw() {
  background(220);
  moveShapes();
  displayShapes();
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

function moveShapes() {
  for (let i=0; i<shapes.length; i++) {
    shapes[i].x += shapes[i].dx;
    shapes[i].y += shapes[i].dy;
    if ((shapes[i].y - shapes[i].diameter / 2) < 0 || (shapes[i].y + shapes[i].diameter / 2) > windowHeight) {
      shapes[i].dy *= -1;
    }
    if ((shapes[i].x - shapes[i].diameter / 2) < 0 || (shapes[i].x + shapes[i].diameter / 2) > windowWidth) {
      shapes[i].dx *= -1;
    }
  }
}

function displayShapes() {
  for (let i=0; i<shapes.length; i++) {
    fill(shapes[i].theColour);
    circle(shapes[i].x, shapes[i].y, shapes[i].diameter);
  }
}

function spawnBall(tempX,tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    dx: random(-5, 5),
    dy: random(-5, 5),
    diameter: random(25, 100),
    theColour: color(random(255), random(255), random(255))
  };
  shapes.push(newBall);
}