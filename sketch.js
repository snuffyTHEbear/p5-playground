let x, y, size, rot, w, h, r, g, b, a;
let sx, sy;

function setup() {
  w = 500;
  h = 500;
  sx = sy = 1;
  size = 50;
  x = size;
  y = h * 0.5;
  createCanvas(w, h);
  background(255);
}

function draw() {
  background(255);
  fill(30);
  noStroke();
  //ellipse(x, y, size, size);
  x += sx;
  if(x >= w - size * 0.5)
  {
    sx *= -1;
  }
  else if(x <= size * 0.5)
  {
    sx *= -1;
  }
}
