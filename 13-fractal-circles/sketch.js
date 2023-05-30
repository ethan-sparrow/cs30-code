// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fractalCircle(width/2, width, 10);
}

function fractalCircle(x, diameter, depth) {
  //base case
  circle(x, height/2, diameter);
  if (depth > 0) {
    depth--;
    //left circle
    fractalCircle(x-diameter/4, diameter/2, depth);
    //right circle
    fractalCircle(x+diameter/4, diameter/2, depth);
  }
}