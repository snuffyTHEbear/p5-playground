class Mover {
  constructor(x, y, vx, vy, m) {
    this.mu = 0.1;
    this.colour = 0;
    this.mass = m;
    this.radius = sqrt(this.mass) * 2;
    this.diameter = this.radius * 2;
    this.position = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector(0, 0);
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acceleration = p5.Vector.sub(mouse, this.position);
    // this.acceleration.setMag(1);
    // this.velocity.add(this.acceleration);
    // this.velocity.limit(5);
    // this.position.add(this.velocity);
    // this.previous.set(this.position);
    // var step = p5.Vector.random2D();
    // step.mult(2);
    // this.position.add(step);

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
  }

  show(drawFill = true) {
    // stroke(255, 0, 100);
    // strokeWeight(2);

    drawFill ? fill(this.colour) : noFill();
    //point(this.pos.x, this.pos.y);
    //ellipse(this.position.x, this.position.y, this.diameter);
  }

  friction() {
    let diff = this.h - (this.position.y + this.radius);
    if (diff < 1) {
      //this.velocity.mult(0.95);
      //Direction of friction
      let friction = this.velocity.copy();
      friction.normalize();
      friction.mult(-1);
      //Magnitude of friction
      let normal = this.mass;
      friction.setMag(this.mu * normal);
      this.applyForce(friction);
    }
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);

    this.acceleration.add(f);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 0.2;
    let strength = (G * (this.mass * mover.mass)) / distanceSq;

    force.setMag(strength);
    mover.applyForce(force);
  }

  boundsCheck(w, h) {
    if (this.position.x >= w - this.radius) {
      this.position.x = w - this.radius;
      this.velocity.x *= -1;
    }
    if (this.position.x <= this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }
    if (this.position.y >= h - this.radius) {
      this.position.y = h - this.radius;
      this.velocity.y *= -1;
    }
    if (this.position.y < this.radius) {
      this.position.y = this.radius;
      this.velocity.y *= -1;
    }
  }

  getRandomColour() {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    var a = 125;
    return color(r, g, b, a);
  }
}
