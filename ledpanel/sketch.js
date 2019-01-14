let cols = 40;
let rows = 9;
let grid = 10;
let idx = 0;
let width, height;
let panel = [];
let placeholder = "          ";
let msg = "AUf den Poden mit dem Purchen!";

function setup() {
  width = cols * grid;
  height = rows * grid;

  msg = placeholder + msg + placeholder;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      panel.push(hex2bin(hex(0x0)));
    }
  }

  // encode message
  panel = [];
  for (let i = 0; i < msg.length; i++) {
    let letter = letters.set[msg[i].toUpperCase()];
    for (let j = 0; j < letter.length; j++) {
      panel.push(hex2bin(hex(letter[j])));
    }
  }

  createCanvas(width, height);
}

function draw() {
  frameRate(15);
  background(0);
  strokeWeight(2);
  stroke(51);

  for (let i = 0; i < cols; i++) {
    for (j = 0; j < cols; j++) {
      if (panel[i + idx][j] != 0 && panel[i + idx][j] != undefined) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * grid, j * grid, grid, grid);
    }
  }

  idx++;
  if (idx > panel.length - cols) {
    idx = 0;
  }
}

function hex2bin(hex) {
  return ("00000000" + parseInt(hex, 16).toString(2)).substr(-8);
}
