class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }

  update() {
    this.pos.add(this.vel); 
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    // point(this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
