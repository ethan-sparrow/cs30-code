// OOP walker

class Walker {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
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

let kevin;
let wasi;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kevin = new Walker(100, 100, "red");
  wasi = new Walker(300, 300, "blue");
}

function draw() {

  kevin.move();
  wasi.move();
  
  kevin.display();
  wasi.display();

}
