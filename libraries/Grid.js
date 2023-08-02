// class Grid
// {
//     constructor()
//     {
//         this.step_x = 10;
//         this.step_y = 10;
//         this.sections = [];

//         for(var i = 0; i < width; i += this.step_x)
//         {
//             for(var j = 0; j < height; j += this.step_y)
//             {
//                 var section = [];

//             }
//         }

//     }

//     update
//     {

//     }

//     display()
//     {

//     }
// }

// /**
//  * @type {CreateCircle}
//  */
// let circle;

// /**
//  * @type {Mover}
//  */
// let mover;

// let centreX;
// let centreY;

// let grid;

// function setup() {
//   createCanvas(400, 400);
//   background(0);
//   frameRate(60);

//   grid = [];

//   centreX = width * 0.5;
//   centreY = height * 0.5;

//   mover = new Mover(centreX, centreY);

//   var step_x = 10;
//   var step_y = 10;

//   for (var i = 0; i < width; i += step_x) {
//     for (var j = 0; j < height; j += step_y) {
//       var section = [i, j];

//       grid.push(section);

//       // noStroke();
//       // var c = noise(i * 0.001, j * 0.001) * 255;
//       // fill(c);
//       // rect(i, j, 10, 10);
//     }
//   }
// }

// function draw() {
//   //background(0);
//   for (var i; i < grid.length; i ++){
//     var c = noise(i * 0.001, )
//     rect(grid[i][0], grid[i][1], 10,10);
//   }
//   // let pos = createVector(centreX, centreY);
//   // let mouse = createVector(mouseX, mouseY);
//   // let v = p5.Vector.sub(mouse, pos);
//   // let m = v.mag();
//   // // v.normalize().mult(50);
//   // // v.setMag(50);
//   // mover.update();
//   // mover.show();
//   // // translate(centreX, centreY);
//   // // strokeWeight(4);
//   // // stroke(255);
//   // // line(0, 0, v.x, v.y);
// }

// function getRandomColour() {
//   var r = random(0, 255);
//   var g = random(0, 255);
//   var b = random(0, 255);
//   return color(r, g, b);
// }
