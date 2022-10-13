let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background('green');
      text("0", 100, 100);

      fill('black');
      for (let j = 0; j <= height; j++) {
        for (let i = 0; i <= width; i++) {
          ellipse(i * 10, j * 30, 10, 10);
        }
      }
      break;

    case 1:
      background('yellow');
      text("1", 100, 100);

      fill('white');
      for (let j = 0; j <= height; j = j + 2) {
        for (let i = 0; i <= width; i++) {
          rect(i * 5, j * 40, 20, 20);
        }
      }

       break;

    case 2:
      background('rgb(97,15,15)');
      text("2", 100, 100);

      fill("rgb(237,172,183)");
      for (let j = 0; j <= 100; j = j + 2) {
        for (let i = 0; i <= 100; i++) {
          triangle(i * 5, j * 40, 15, 10, 10, 10);
        }
      }
      break;

    case 3:
     background('orange');
      text("3", 100, 100);

      fill('white');
      for (let j = 0; j < 100; j = j + 2) {
        for (let i = 0; i < 100; i++) {
          rect(i * 30, j * 100, 10, 200);
        }
      }
      break;

    case 4:
      text("4", 100, 100);

      background('black');
      text("1", 100, 100);

      fill('rgb(147,147,224)');
      for (let j = 0; j < 100; j = j + 2) {
        for (let i = 0; i < 100; i++) {
          ellipse(i * 20, j * 10, 15, 45);
        }
      }

      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
