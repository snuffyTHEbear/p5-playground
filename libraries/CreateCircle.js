class CreateCircle {
  constructor(w, h, c = 255) {
    this.diameter = random(20, 50);
    this.radius = this.diameter * 0.5;
    //this.colour = this.getRandomColour();
    this.colour = c;
    this.speedX = random(-1,1);
    this.speedY = random(-1,1);
    this.x = random(100, w - 100);
    this.y = random(100, h - 100);
    this.w = w;
    this.h = h;
    this.dFlag = false;
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
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  boundsCheck() {
    if (this.x >= this.w - this.radius) {
      this.speedX *= -1;
    }
    if (this.x <= this.radius) {
      this.speedX *= -1;
    }
    if (this.y >= this.h - this.radius) {
      this.speedY *= -1;
    }
    if (this.y < this.radius) {
      this.speedY *= -1;
    }
  }

  intersects(other)
  {
    return dist(this.x, this.y, other.x, other.y) < this.radius + other.radius;
  }
}
