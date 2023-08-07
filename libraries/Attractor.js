class Attractor {
  constructor(x, y, m) {
    this.position = createVector(x, y);
    this.mass = m;
    this.radius = sqrt(this.mass);
    this.diameter = this.radius * 2;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distanceSq = force.magSq();

    let G = 5;
    let strength = (G * (this.mass * mover.mass)) / distanceSq;

    force.setMag(strength);
    mover.applyForce(force);
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, this.diameter);
  }
}
