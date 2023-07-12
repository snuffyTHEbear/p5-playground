let centreX, centreY;
/**
 * 
 */
let circles;

let colours;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  this.centreX = windowWidth * 0.5;
  this.centreY = windowHeight *0.5;
  frameRate(60)

  colours = [color(76, 75, 22), color(137, 129, 33), color(231, 177, 10), color(247, 241, 229)];

  circles = [];

  for(var i = 0; i < 10; i++)
  {
    var n = round(random(colours.length-1));
    var c = colours[n];
    circles.push(new CreateCircle(windowWidth, windowHeight, c));
  }
}

function draw() 
{
  background(0);
  
  for(c of circles)
  {
    c.move();
    c.boundsCheck();
    c.display();
  }
}

function windowResized()
{
  createCanvas(windowWidth, windowHeight);
  this.centreX = windowWidth * 0.5;
  this.centreY = windowHeight *0.5;
}
