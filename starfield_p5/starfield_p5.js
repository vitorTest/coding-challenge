let x = 200;
let y = 0;
going = true;

function setup() {
  createCanvas(600, 400);
  line(15, 25, 70, 90);
  background(100);
}

function draw() {
  ellipse(x, y, 100, 50);

  if (going) {
    //x = x + 1;
    y = y + 1;

    if (x == 600 || y == 423) {
      going = false;
    }
  } 
  //else {
  //  x = x - 1;
  //  y = x;

  //  if (x == 0 || y == 0) {
  //    going = true;
  //  }
  //}
}
