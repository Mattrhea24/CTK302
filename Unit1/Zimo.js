/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 
function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  text();
}

function draw() {
  background("brown");

  if (mouseIsPressed) {
     background("black")
     fill("gray")
    rect(370,250,400,300)
    rect(370,130,440,200)
    fill("black")
    rect(370,180,250,100)
    fill("light gray")
    rect(370,225,250,10)
    fill("green")
    triangle(257,220,275,220,266,177)
    triangle(290,220,305,220,296,177)
    triangle(440,220,454,220,450,177)
    triangle(473,220,487,220,478,184)
    fill("white")
    triangle(260,220,270,220,266,197)
    triangle(293,220,300,220,298,197)
    triangle(443,220,451,220,448,197)
    triangle(476,220,484,220,478,197)
    fill(170, 150, 100)
    rect(250,460,1000,180)
    fill("black")
    rect(250,420,1000,5)
    rect(250,372,1000,5)
    
    //Head
    fill("Green");
    ellipse(370, 235, 130, 155);
    fill(0,90,0)
    ellipse(370, 250, 10, 10);
    
    fill("black")
   arc(370, 280, 30, 20, 0, PI + QUARTER_PI, CHORD);
    //Clothes
    fill("black")
    rect(370,500,170,170)
    ellipse(330,350,200,60)
    ellipse(435,410,60,140)
    ellipse(370, 410, 180, 200);
    fill("green")
    ellipse(225,350,42,40)
    ellipse(225,350,42,40)
    //eyes
    fill("black")
    rect(370, 160, 125, 100)
    ellipse(370, 145, 100, 100)
    ellipse(320, 150, 100, 100)
    ellipse(415, 150, 100, 100)
    ellipse(340, 235, 20, 20)
    ellipse(400, 235, 20, 20)
    fill("yellow")
    ellipse(340, 235, 15, 15)
    ellipse(400, 235, 15, 15)
     fill("white")
    ellipse(400, 235, 8, 8)
    ellipse(340, 235, 8, 8)
    //buttons
    fill("white")
    ellipse(370, 360, 20, 20)
    ellipse(370, 440, 20, 20)
    ellipse(370, 400, 20, 20)
    //pizza
    fill(80,80,80)
    rect(170,350,120,100)
    fill("black")
    ellipse(170,350,80,80)
    fill("white")
    ellipse(170,350,60,60)
    fill("green")
    ellipse(170,350,55,55)
    fill("brown")
    ellipse(170,350,10,10)
     ellipse(185,357,10,10)
     ellipse(170,365,10,10)
     ellipse(155,345,10,10)
     ellipse(155,360,10,10)
    ellipse(165,335,10,10)
    ellipse(180,340,10,10)
    fill("green")
    ellipse(700, 235, 130, 155);
    ellipse(583,362,40,40)
    fill("white")
    ellipse(700,412,110,200)
    rect(660,363,120,45)
    fill("brown")
    rect(698,540,90,150)
    fill("black")
    rect(658,215,20,10)
      fill("black")
   arc(645, 270, 20, 20, 0, PI + QUARTER_PI, CHORD);
    fill("light blue")
    ellipse(640,296,10,10)
    ellipse(637,320,10,10)
    
   
    
    
    
       
  } else {
    // when the mouse isn't pressed!
    fill("gray")
    rect(370,250,400,300)
    rect(370,130,440,200)
    fill("black")
    rect(370,180,250,100)
    fill("light gray")
    rect(370,225,250,10)
    fill("red")
    triangle(257,220,275,220,266,177)
    triangle(290,220,305,220,296,177)
    triangle(440,220,454,220,450,177)
    triangle(473,220,487,220,478,184)
    fill("orange")
    triangle(260,220,270,220,266,197)
    triangle(293,220,300,220,298,197)
    triangle(443,220,451,220,448,197)
    triangle(476,220,484,220,478,197)
    fill(170, 150, 100)
    rect(250,460,1000,180)
    fill("black")
    rect(250,420,1000,5)
    rect(250,372,1000,5)
    
    //Head
    fill(170, 150, 100);
    ellipse(370, 235, 130, 155);
    fill(166, 165, 100)
    ellipse(370, 250, 10, 10);
    
    fill("black")
   arc(370, 280, 30, 20, 0, PI + QUARTER_PI, CHORD);
    //Clothes
    fill("white")
    rect(370,500,170,170)
    ellipse(330,350,200,60)
    ellipse(435,410,60,140)
    ellipse(370, 410, 180, 200);
    fill(170, 150, 100)
    ellipse(225,350,42,40)
    ellipse(225,350,42,40)
    //eyes
    fill("white")
    rect(370, 160, 125, 100)
    ellipse(370, 145, 100, 100)
    ellipse(320, 150, 100, 100)
    ellipse(415, 150, 100, 100)
    ellipse(340, 235, 20, 20)
    ellipse(400, 235, 20, 20)
    fill("brown")
    ellipse(340, 235, 15, 15)
    ellipse(400, 235, 15, 15)
     fill("black")
    ellipse(400, 235, 8, 8)
    ellipse(340, 235, 8, 8)
    ellipse(370, 360, 20, 20)
    ellipse(370, 440, 20, 20)
    ellipse(370, 400, 20, 20)
    //pizza
    fill("white")
    rect(170,350,120,100)
    fill(170, 150, 100)
    ellipse(170,350,80,80)
    fill("red")
    ellipse(170,350,60,60)
    fill("yellow")
    ellipse(170,350,55,55)
    fill("red")
    ellipse(170,350,10,10)
     ellipse(185,357,10,10)
     ellipse(170,365,10,10)
     ellipse(155,345,10,10)
     ellipse(155,360,10,10)
    ellipse(165,335,10,10)
    ellipse(180,340,10,10)
    
    
  }

  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
