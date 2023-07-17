/**
 * @type {CreateCircle}
 */
let circle;

let angle;
let range;

let start;
let inc;

let centreX;
let centreY;

function setup() {
  createCanvas(200, 200);

  frameRate(30);

  centreX = width * 0.5;
  centreY = height * 0.5;

  inc = 0.05;
  angle = 0;
  range = 5;
}

function draw() {
  loadPixels();
  // pixels are indexed as first pixel is r,g,b,a in pixels
  // so first pixel would be [r, g, b, a, ...]
  //pixels[0] = r, pixels[1] = g, index + 0,1,2,3 etc...

  var yoff = 0;
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      var b = noise(yoff, xoff) * 255;
      pixels[index + 0] = x;
      pixels[index + 1] = r;
      pixels[index + 2] = y;
      pixels[index + 3] = b;
// =cos(angle * range?)
      xoff += inc;
      // xoff = cos(angle);
    }
    // =sin(Angle) * range?
    yoff += inc;
    // yoff = sin(angle);
  }
  inc -= 0.0005;
  angle += 0.01;
  

  updatePixels();

  //noLoop();
}
