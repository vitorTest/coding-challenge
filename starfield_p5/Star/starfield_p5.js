var stars = [];
var numberOfStars = 800;
var speed;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < numberOfStars; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0, 100);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();  
  }
}
