// OOP walker

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = (random(255), random(255), random(255));
    this.speed = 5;
    this.size = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.speed;
    }
    else
    if (choice < 50) {
      this.y += this.speed;
    }
    else
    if (choice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }

  }
  
  

}

let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let newWalker = new Walker(100, 100);
  walkerArray.push(newWalker);
}

function draw() {
  for (let i = 0; i<walkerArray.length; i++) {
    walkerArray[i].move();
    walkerArray[i].display();
  }
}

function mousePressed() {
  let newWalker = new Walker(mouseX, mouseY);
  walkerArray.push(newWalker);
}