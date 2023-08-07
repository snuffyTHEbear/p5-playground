let centreX;
let centreY;
let gravity;
let wind;

let movers;
let sun;
let groups;
let colours;

function setup() {
  createCanvas(500, 400);
  background(0);
  frameRate(60);

  centreX = width * 0.5;
  centreY = height * 0.5;

  groups = [];
  colours = [];

  // mover = new Mover(centreX, centreY);
  movers = [];
  let count = 0;
  let inc = 0;
  //Group movers into three's
  groups[inc] = [];
  for (var i = 0; i < 30; i++) {
    let pos = p5.Vector.random2D();
    let vel = pos.copy();
    pos.setMag(random(200, 300));
    vel.setMag(random(5, 15));
    vel.rotate(PI / 2);
    let m = random(5, 15);
    let mover = new Mover(pos.x, pos.y, vel.x, vel.y, m);
    movers[i] = mover;

    groups[inc].push(mover);
    count += 1;
    if (count == 3) {
      groups[inc].push(getRandomColour());
      count = 0;
      inc += 1;
      if (i != 29) {
        groups[inc] = [];
      }
    }
  }

  sun = new Mover(0, 0, 0, 0, 350);

  wind = createVector(0.1, 0);
  gravity = createVector(0, 0.2);
}

function draw() {
  background(0, 3);

  translate(centreX, centreY);

  for (let mover of movers) {
    sun.attract(mover);
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other);
        //stroke(255, 0, 100);
        //line(mover.position.x,mover.position.y,other.position.x,other.position.y);
      }
    }
  }

  for (let mover of movers) {
    mover.update();
    //mover.show(false);
  }

  for (var i = 0; i < groups.length; i++) {
    let group = groups[i];
    stroke(group[3]);

    //line(mover.position.x,mover.position.y,other.position.x,other.position.y);
    line(
      group[0].position.x,
      group[0].position.y,
      group[1].position.x,
      group[1].position.y
    );
    line(
      group[1].position.x,
      group[1].position.y,
      group[2].position.x,
      group[2].position.y
    );
    line(
      group[2].position.x,
      group[2].position.y,
      group[0].position.x,
      group[0].position.y
    );
  }

  sun.show();
}

function getRandomColour() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  var a = 125;
  return color(r, g, b, a);
}
