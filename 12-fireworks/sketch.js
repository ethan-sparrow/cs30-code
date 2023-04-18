// fireworks OOP

class Spark {
  constructor(x, y, dx, dy, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = 255;
    this.size = 5;
    this.gravity = 0.1;
  }
  
  display() {
    rectMode(CENTER);
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    square(this.x, this.y, this.size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.a -= 2;
    this.dy += this.gravity;
  }

  isDead() {
    return this.a < 0;
  }
}

class ReverseSpark {
  constructor(x, y, dx, dy, r, g, b) {
    this.x = x + 240*2*dx;
    this.y = y + 240*2*dy;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = 0;
    this.size = 5;
    //this.gravity = 0.1;
  }

  display() {
    rectMode(CENTER);
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    square(this.x, this.y, this.size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.a += 2;
    //this.dy += this.gravity;
  }

  isDead() {
    return this.a > 240;
  }
}

let fireworks = [];

let reverseFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let i =  fireworks.length - 1; i>=0; i--) {
    fireworks[i].update();
    fireworks[i].display();

    if (fireworks[i].isDead()) {
      fireworks.splice(i, 1);
    }
  }
  
}

function spawnSpark(r, g, b) {
  let someSpark = new Spark(mouseX, mouseY, random(-10, 10), random(-10, 10), r, g, b);
  fireworks.push(someSpark);
}

function spawnReverseSpark(r, g, b) {
  let someSpark = new ReverseSpark(mouseX, mouseY, random(-10, 10), random(-10, 10), r, g, b);
  reverseFireworks.push(someSpark);
}

function mousePressed() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  for (let i = 0; i < 50; i++) {
    spawnSpark(r, g, b);
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    for (let i = 0; i < 50; i++) {
      spawnSpark(r, g, b);
    }
  }
}