let numberOfTouches ;
let i1, i2, i3, i4;
function setup() {
  createCanvas(800, 800);
  i1 = loadImage("assets/fall.jpg")
  i2 = loadImage("assets/winter.jpg")
  i3 = loadImage("assets/spring.jpg")
  i4 = loadImage("assets/summer.jpg")

  imageMode(CENTER);
}
function draw() {
  rectMode(CENTER);
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen", 5, 22) ; 

      break ;
      
      case 1: 
       text("Ooooh Pretty Fall", 5, 22) ; 
       image(i1, width/ 2, height/ 2 - 120, 400, 400);
     
      break ;
      
      case 2:
      text("Brrr Winter", 5, 22) ; 
      image(i2, width/ 2, height/ 2 - 120, 400, 400);
      
      break ;
      
      case 3:
     text("Finally Spring!", 5, 22) ; 
     image(i3, width/ 2, height/ 2 - 120, 400, 400);
    
      break ;
      case 4:
     text("Summertime!!", 5, 22) ; 
     image(i4, width/ 2, height/ 2 - 120, 400, 400);
    
      break ;
    
      
  }
  
}
    
  