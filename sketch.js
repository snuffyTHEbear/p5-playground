/**
 * @type {CreateCircle}
 */
let circle;

let centreX;
let centreY;

let pos;
let prev;

let colour;
let diam;

let gravity;
let wind;
/**
 * @type {Mover}
 */
let movers;

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(60);

  centreX = width * 0.5;
  centreY = height * 0.5;

  // mover = new Mover(centreX, centreY);
  movers = [];
  for (var i = 0; i < 3; i++) {
    var m = new Mover(random(50, width - 50), random(50, height - 50));
    movers.push(m);
  }

  pos = createVector(centreX, centreY);
  prev = pos.copy();

  diam = random(10, 20);
  colour = getRandomColour();

  wind = createVector(0.1, 0);
  gravity = createVector(0, 0.2);
}

function draw() {
  background(0);

  movers.forEach((mover) => {
    if (mouseIsPressed) {
      mover.applyForce(wind);
    }

    mover.applyForce(p5.Vector.mult(gravity, mover.mass));
    mover.update();
    mover.boundsCheck(width, height);
    mover.show();
  });
}

function getRandomColour() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  var a = 125;
  return color(r, g, b, a);
}
