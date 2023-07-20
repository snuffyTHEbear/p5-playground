/**
 * @type {CreateCircle}
 */
let circle;

/**
 * @type {Walker}
 */
let walker;

let centreX;
let centreY;

function setup() {
  createCanvas(400, 400); 
  background(0);
  frameRate(60);

  centreX = width * 0.5;
  centreY = height * 0.5;

  walker = new Walker(centreX, centreY);
}

function draw() {
  // background(0);

  translate(centreX, centreY);

  let v = p5.Vector.random2D();
  v.mult(random(50, 100));

  strokeWeight(4);
  stroke(255, 50);
  line(0,0,v.x,v.y);
}