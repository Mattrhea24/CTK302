let myCar; myCar2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
  myCar = new Car();
  myCar2 = new Car();
}

function draw() {
  background(100);

  myCar.display();
  myCar.move();

  myCar2.display();
  myCa2r.move();

}




class Car {

  // constructor and attributes
  constructor() {
    this.x = random(width) ;  // initialize your attributes here
    this.y = random(height) ;
    this.v = random(2, 6) ;
    
  }

  // methods

  display() {
    rect(this.x, 100, 75, 25);
  }

  move() {
    this.x = this.x + this.v;
  }
  
}