class Orb {
  constructor(x, y, r, a, s, c) {
    this.posx = x;
    this.posy = y;
    this.radius = r;
    this.angle = a;
    this.step = s;
    this.color = c;
  }

  update() {
    this.posx = floor(cos(this.angle) * this.radius);
    this.posy = floor(sin(this.angle) * this.radius);
    this.angle += this.step;
  }

  show() {
    push();
    noFill();
    stroke(this.color);
    strokeWeight(7);
    point(this.posx, this.posy);
    pop();
  }
}
