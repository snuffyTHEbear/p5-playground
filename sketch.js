/**
 * @type {CreateCircle}
 */
let circle;

let centreX;
let centreY;


let inc;

function setup() {
  createCanvas(200, 200);
  background(0);
  frameRate(30);

  centreX = width * 0.5;
  centreY = height * 0.5;
}

function draw() {
  // background(0);

  noFill();
  stroke(255);

}



// Random walk
// stroke(255);
//   strokeWeight(2);
//   point(x, y);

//   var r = floor(random(4));
//   switch (r) {
//     case 0:
//       x += 1;
//       break;

//     case 1:
//       x -= 1;
//       break;

//     case 2:
//       y+=1;
//       break;

//     case 3:
//       y-=1;
//       break;
//   }