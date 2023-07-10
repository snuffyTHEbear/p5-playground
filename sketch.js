let w = 900;
let h = 650;
let centreX = w * 0.5;
let centreY = h * 0.5;
/**
 * @type {Ball}
 */
let b;

function setup() 
{
  createCanvas(w, h);
  b = new Ball(w, h);
  print(degrees(PI/2));
}

function draw() 
{
  background(255);
  b.display();
  b.move();
  b.boundsCheck();
}
