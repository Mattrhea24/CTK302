/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 
let x = 0;


function setup() {
  createCanvas(500 , 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background("orange");
  loadFont("assets/Acme-Regular.ttf");
  textSize(128);
text("BOOO!!!",x, 200,);
x= x + 3;
if(x > width) {
  x=-500;
}
}
