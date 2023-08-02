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

let pos;
let prev;

let colour;
let diam;

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(60);

  centreX = width * 0.5;
  centreY = height * 0.5;

  mover = new Mover(centreX, centreY);

  pos = createVector(centreX, centreY);
  prev = pos.copy();

  diam = random(10, 20);
  colour = getRandomColour();
}

function draw() {
  //background(0);

  // let pos = createVector(centreX, centreY);
  // let mouse = createVector(mouseX, mouseY);

  // let v = p5.Vector.sub(mouse, pos);

  //let m = v.mag();
  // v.normalize().mult(50);
  // v.setMag(50);

  stroke(0);
  strokeWeight(1, 50);

  //line(pos.x, pos.y, prev.x, prev.y);

  prev.set(pos);

  var step = p5.Vector.random2D();

  var r = random(100);
  if (r < 1) {
    step.mult(random(25, 100));
    colour = getRandomColour();
    diam = random(10, 25);
  } else {
    step.setMag(2);
  }

  pos.add(step);
  boundsCheck();

  fill(colour);
  ellipse(pos.x, pos.y, diam, diam);
  // mover.update();
  // mover.show();
  // translate(centreX, centreY);
  // strokeWeight(4);
  // stroke(255);
  // line(0, 0, v.x, v.y);
}

function getRandomColour() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  var a = 125;
  return color(r, g, b, a);
}

function boundsCheck() {
  if (pos.x >= width - diam) {
    pos.x = diam;
  }
  if (pos.x <= -diam) {
    pos.x = width - diam;
  }
  if (pos.y >= height - diam) {
    pos.y = diam;
  }
  if (pos.y < -diam) {
    pos.y = height - diam;
  }
}
