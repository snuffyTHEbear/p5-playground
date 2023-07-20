class Mover {
  constructor(x, y) {
    this.mass = 5;
    this.position = createVector(width * 0.5, height * 0.5);
    this.velocity = createVector();
    this.acceleration = createVector();
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acceleration = p5.Vector.sub(mouse, this.position);
    // this.acceleration.setMag(1);
    // this.velocity.add(this.acceleration);
    // this.velocity.limit(5);
    // this.position.add(this.velocity);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    // point(this.pos.x, this.pos.y);
    ellipse(this.position.x, this.position.y, 32);
  }
}
