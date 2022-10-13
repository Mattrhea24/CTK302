let f1, f2, f3 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/lemon.ttf");
  f2 = loadFont("assets/nabla.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("Hello there!", width / 2, 100);
  textFont(f2, 48);
  text("What's up?", width / 2, 200 );
}
