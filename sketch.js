/**
 * @type {CreateCircle}
 */
let circle;

/**
 * @type {Mover}
 */
let mover;

let centreX;
let centreY;

function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60);

  centreX = width * 0.5;
  centreY = height * 0.5;

  mover = new Mover(centreX, centreY);
}

function draw() {
  background(0);

  let pos = createVector(centreX, centreY);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);

  let m = v.mag();
  // v.normalize().mult(50);
  // v.setMag(50);

  mover.update();
  mover.show();
  // translate(centreX, centreY);
  // strokeWeight(4);
  // stroke(255);
  // line(0, 0, v.x, v.y);
}
