let centreX, centreY;
/**
 *
 */
let circles;

let colours;

function setup() {
  createCanvas(windowWidth, windowHeight);
  this.centreX = windowWidth * 0.5;
  this.centreY = windowHeight * 0.5;
  frameRate(24);

  colours = [
    color(76, 75, 22),
    color(137, 129, 33),
    color(231, 177, 10),
    color(247, 241, 229),
  ];

  circles = [];

  for (var i = 0; i < 20; i++) {
    var n = round(random(colours.length - 1));
    var c = colours[n];
    circles.push(new CreateCircle(windowWidth, windowHeight, c));
  }
}

function draw() {
  background(255);

  for (c of circles) {
    //c.x += random(-1, 1);
    //c.y += random(-1, 1);
    c.move();
    c.boundsCheck();
    //c.display();

    noFill();
    for (other of circles) {
      if (c !== other) {
        //Map distance to alpha of a line between two points
        //radius + radius + 20 distance?
        var d = dist(c.x, c.y, other.x, other.y);
        if (d < 250) {
          c.dFlag = true;
          var alph = map(d, 100, 250, 255, 0);
          stroke(0,0,0,alph);
          strokeWeight(0.1);
          line(c.x, c.y, other.x, other.y);
        }
        else{
          c.dFlag = false;
        }
      }
    }
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  this.centreX = windowWidth * 0.5;
  this.centreY = windowHeight * 0.5;
}
