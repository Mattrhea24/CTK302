let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
  myCar = new Car();

}

function draw() {
  background(100);

  myCar.display();
  myCar.move();
  fill('white') ;
  text(myCar.x, 100, 100 ) ;

}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2, height/2) ;
      // initialize your attributes here
      this.vel = createVector(random(-3, 3) , random(-3,3));
    
  }

  // methods

  display() {
    rect(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    if (this.x > width) this.pos.x = 0 ;
    if (this.x < 0) this.pos.x = 0 ;
    if (this.y > height) this.pos.x = 0 ;
    if (this.y < 0) this.pos.x = 0 ;
  }
  
}