let centreX, centreY;
/**
 *
 */
let circles;

let colours;

let rowA;
let rowB;
let rowC;
let rows;

let range_a;
let range_b;
let range_c;
let angle_a;
let angle_b;
let angle_c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  this.centreX = windowWidth * 0.5;
  this.centreY = windowHeight * 0.5;
  frameRate(30);

  this.rowA = [0, 50];
  this.rowB = [0, 30];
  this.rowC = [0, 75];
  circles = [[], [], []];
  rows = [this.rowA, this.rowB, this.rowC];

  this.angle_a = 0;
  this.angle_b = 0;
  this.angle_c = 0;
  this.range_a = 50;
  this.range_b = 30;
  this.range_c = 75;

  colours = [
    color(76, 75, 22),
    color(137, 129, 33),
    color(231, 177, 10),
    color(247, 241, 229),
  ];

  var numObjects = 8;
  //three rows of circles
  // animating on sine WaveShaperNode, draw between alpha lines
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < numObjects; j++) {
      var circle = new CreateCircle(windowWidth, windowHeight, 0);
      var posX = j * 35;
      var posY = centreY + i * 7;
      circles[i].push(circle);
    }
  }

  //print(circles);

  // circles = [];

  // for (var i = 0; i < 20; i++) {
  //   var n = round(random(colours.length - 1));
  //   var c = colours[n];
  //   circles.push(new CreateCircle(windowWidth, windowHeight, c));
  // }
}

function draw() {
  background(255);
  // var posY = this.centreY + sin(this.angle) * this.range;
  // this.angle += 0.1;
  var i, j;
  i=0;
  j=0;
  for(var row of circles)
  {
    for(var c of row)
    {
      // var posY = this.centreY + sin(rows[i][0]) * rows[i][1];
      c.y = sin(rows[i][0]) * rows[i][1];
      c.move();
      c.display();
      j++;
    }
    i++;
  }


  // for (c of circles) {
  //   //c.x += random(-1, 1);
  //   //c.y += random(-1, 1);
  //   c.move();
  //   c.boundsCheck();
  //   //c.display();

  //   noFill();
  //   for (other of circles) {
  //     if (c !== other) {
  //       //Map distance to alpha of a line between two points
  //       //radius + radius + 20 distance?
  //       var d = dist(c.x, c.y, other.x, other.y);
  //       if (d < 250) {
  //         c.dFlag = true;
  //         var alph = map(d, 100, 250, 255, 0);
  //         stroke(0, 0, 0, alph);
  //         strokeWeight(0.1);
  //         line(c.x, c.y, other.x, other.y);
  //       } else {
  //         c.dFlag = false;
  //       }
  //     }
  //   }
  // }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  this.centreX = windowWidth * 0.5;
  this.centreY = windowHeight * 0.5;
}
