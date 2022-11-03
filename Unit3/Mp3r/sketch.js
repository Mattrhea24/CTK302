var back;
var over;
var title;
var win;
var cars = [];
var frogPos;
var state = 0;
var maxCars = 10;
var maxTimer = 12*60
var timer = maxTimer;
let ball1, ball2, ball3, ball4;
let types = [];

function setup() {
  // put setup code here
  createCanvas(800,600);

//spawn cars
for(var i = 0; i < maxCars; i++){
  cars.push(new Car());
}//end loop
  frogPos = createVector(400, height - 100);

  textAlign(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);


  back = loadImage("assets/bkg1.jpg");
  over = loadImage("assets/bkg2.jpg");
  title = loadImage("assets/reb.jpg");
  win = loadImage("assets/trophy.png");

  ball1 = loadImage("assets/ball1.png");
ball2 = loadImage("assets/ball2.png");
ball3 = loadImage("assets/ball3.jpg");
ball4 = loadImage("assets/ball4.jpg");

types = [ball1, ball2, ball3, ball4];
types
}//end setup

//--------------------------------------

function draw() {
  // put drawing code here

  switch(state){

    case 0://menu
    background('black');
    image(title,400,300, 800, 600);
    fill('black');
    rect(400,250,500,150);
    textSize(50);
    fill('white');
    text("Grab The Rebounds!",width/2 ,height/2-50);
    textSize(28);
    text("click to start",width/2 ,height/2);
    break;

    case 1://game state
    game();

    timer = timer - 1;;
    if(timer <= 0){
      timer = maxTimer;
      state = 3;//they lost
    }
    break;

    case 2://win state
      background('black');
      image(win,400,500);
      textSize(50);
      text("You Are The Rebounding Champion!",width/2, height/2-150);
      text("Click to Restart", width/2, height/2 -100);
      break;

    case 3://lose state
      image(over,400,300, 800, 600);
      fill('White');
      textSize(25);
      text(" You Stink! Get Back In The Gym!", width/2, height/2 + 20);
      break;
    }


}//end draw

//-----------------------------------

  function mouseReleased(){
    switch(state){
      case 0:
      state = 1;
      break;

      case 2://win state
      timer = maxTimer;
      resetGame();
      state = 0;
      break;

      case 3://lost state

      timer = maxTimer;
      resetGame();
      state = 0;
      break;
    }
  }//end of mouse

//-----------------------------------

  function resetGame(){
    cars = [];
    for(var i = 0; i < maxCars; i++){
      cars.push(new Car());
  }//end for
  timer = maxTimer;
}//end of resetGame

//-----------------------------------

  function game(){


    background('lightblue');
    image(back,400,300, 800, 550);

    for(var i = 0; i < cars.length; i++){
      cars[i].display();
      cars[i].drive();

      if(cars[i].pos.dist(frogPos) < 50){
        cars.splice(i , 1);
      }//end if
  }//end for

//if there are no more cars, go to win state
  if(cars.length == 0){
    state = 2; //you win
  }//end if

  //frog
      
      fill('white');
      ellipse(frogPos.x, frogPos.y, 110, 80);
      fill('red');
      ellipse(frogPos.x , frogPos.y+20, 70, 5);
   
      fill('red');
      rect(frogPos.x , frogPos.y -8, 50, 40);
      fill("white");
      rect(frogPos.x  , frogPos.y -8, 40, 30);
      rect(frogPos.x  , frogPos.y +50, 60, 50);
      fill("black");
      rect(frogPos.x  , frogPos.y +50, 1, 50);
      rect(frogPos.x +20  , frogPos.y +50, 1, 50);
      rect(frogPos.x +10 , frogPos.y +50, 1, 50);
      rect(frogPos.x -10 , frogPos.y +50, 1, 50);
      rect(frogPos.x -20 , frogPos.y +50, 1, 50);
      rect(frogPos.x  , frogPos.y +40, 60, 1);4
      rect(frogPos.x  , frogPos.y +30, 60, 1);
      rect(frogPos.x  , frogPos.y +60, 60, 1);
      rect(frogPos.x  , frogPos.y +70, 60, 1);
      rect(frogPos.x  , frogPos.y +50, 60, 1);
      
      checkForKeys();



  }//end of game
//----------------------------------------------

  function checkForKeys(){
    if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
    if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
    if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  }//end of KeyIsDown
  //----------------------------------------------



function Car(){
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5,5), random(-5));
  this.r = random(255);
  this.b = random(255);
  this.g = random(255);

  //methods
  this.display = function() {
    fill('grey');
    ellipse(this.pos.x, this.pos.y, 20, 20);
    fill(this.r,this.b,this.g);
    ellipse(this.pos.x, this.pos.y, 30, 10);
    //rect(this.pos.x, this.pos.y, 50, 50);
  }//end display
//---------------------------------------------
  this.drive = function(){
    this.pos.add(this.vel);
    if (this.pos.x > width) this.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }//end drive
//----------------------------------------------
}//end of car