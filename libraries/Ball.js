class Ball {
  constructor(w, h) {
    this.radius = random(20, 50);
    this.diameter = this.radius * 0.5;
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
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  boundsCheck(w, h) {
    if (this.x >= this.w - this.diameter) {
      this.speedX *= -1;
    }
    if (this.x <= this.diameter) {
      this.speedX *= -1;
    }
    if (this.y >= this.h - this.diameter) {
      this.speedY *= -1;
    }
    if (this.y < this.diameter) {
      this.speedY *= -1;
    }
  }
}
