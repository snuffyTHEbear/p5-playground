class Shape {
  constructor(w, h) 
  {
    this.w = w;
    this.h = h;
    this.colour = this.getRandomColour();
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  getRandomColour() 
  {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    return color(r, g, b);
  }

  display()
  {

  }

  move()
  {

  }

  boundsCheck()
  {

  }
}
