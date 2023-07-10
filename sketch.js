let w,h;
let ball;

function setup() {
  w = 500;
  h = 500;

  ball = new Ball();
  console.log(ball);

  createCanvas(w, h);
  background(255);
}

function draw() 
{
  background(255);
  ball.move();
  ball.boundsCheck(w, h);
  ball.display();
}
