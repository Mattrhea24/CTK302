function setup() {
  createCanvas(720, 400);
  
}

function draw() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  background(173,216,230);
  noStroke();

  fill(0, 128, 40);
 // triangle(18, 18, 18, 360, 81, 360);

  fill("white");
  rect(250, 225, 200,175 );

  fill("brown");
  quad(189, 145, 216, 145, 216, 400, 144, 400);

  fill(0, 150, 250);
  ellipse(345, 260, 40, 40);
  
  
  fill("red");
  triangle(350, 138, 250, 225, 450, 225);

  fill("green");
  arc(200, 150, 280, 280, PI, TWO_PI);
  
  fill("white")
  text(mouseX+","+ mouseY, 20, 20);
  
  fill("brown");
  rect(305, 290, 80,110 );
  
   fill("yellow");
  ellipse(370, 350, 10, 10);
  
   fill("black");
  rect(342, 240, 5, 39 );
  
   fill("black");
  rect(325, 257, 39, 5 );
  
    fill("yellow");
  ellipse(658, 70, 80, 80);
  
  fill("brown");
  quad(542, 105, 516, 105, 516, 400, 594, 400);
  
  fill("green");
  arc(530, 150, 280, 280, PI, TWO_PI);
  
  function mouseReleased(){
    print(mouseX+","+ mouseY);
  }
}



