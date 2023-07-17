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
  createCanvas(500, 500);

  frameRate(30);

  centreX = width * 0.5;
  centreY = height * 0.5;

  inc = 0.05;
}

function draw() {
  loadPixels();

  var yoff = 0;
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }

  updatePixels();

  //noLoop();
}
