let i1, i2, i3;


function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/art1.jpg")
  i2 = loadImage("assets/art2.jpg")
  i3 = loadImage("assets/art3.jpg")
  imageMode(CENTER);
}

function draw() {
  background("grey");
  image(i1, width/ 2, height/ 2 - 120, 100, 100);
  image(i2, width/ 2, height/ 2, 100, 100);
  image(i3, width/ 2, height/ 2 + 120, 100, 100);
}