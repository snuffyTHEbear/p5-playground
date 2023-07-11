class Box {
  constructor(w, h) 
  {
    this.sizeX = random(5, 25);
    this.sizeY = random(5, 25);
    this.colour = this.getRandomColour();
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
    this.x = random(100, w - 100);
    this.y = random(100, h - 100);
    this.w = w;
    this.h = h;
  }

  getRandomColour() {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    return color(r, g, b);
  }

  display() {
    fill(this.colour);
    noStroke();
    rect(this.x, this.y, this.sizeX, this.sizeY);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  boundsCheck(w, h) {
    
  }
}
