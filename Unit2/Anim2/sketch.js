/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 
let x=0;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background("brown");
  push();
  translate(x, 0);
  avatar();
x +=5;
if (x > width) {
  x= -300;
}
pop();

}

function avatar(){
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
