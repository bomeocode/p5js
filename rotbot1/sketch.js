let width = 400;
let height = 400;
let orbs = [];
let circles = 20;
let orbs_per_circle = 18;
let from_color;
let to_color;
let fr = 60;

function setup() {
  createCanvas(width, height);
  background(255);
  frameRate(fr);

  from_color = color(0, 200, 0); // start color
  to_color = color(0, 0, 200); // end color

  let x = 0; // x position
  let y = 180; // y position
  let r = 180; // radius
  let a = 0; // angle
  let s = 0.01; // speed
  let c = color(255, 0, 0); // color

  for (let i = 0; i < circles; i++) {
    c = lerpColor(from_color, to_color, 1 / (circles - i));
    from_color = c;
    for (let j = 0; j < orbs_per_circle; j++) {
      x = cos(a + TWO_PI / orbs_per_circle) * r;
      y = sin(a + TWO_PI / orbs_per_circle) * r;
      orbs.push(new Orb(x, y, r, a, s, c));
      a = a + TWO_PI / orbs_per_circle;
    }
    r -= 7;
    s += 0.001;
  }
  console.log("# Orbs: " + orbs.length);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  for (let i = 0; i < orbs.length; i++) {
    orbs[i].update();
    orbs[i].show();
  }
}
