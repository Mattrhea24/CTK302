let timer = 0;
let i1, i2, i3;
function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/fall.jpg")
  i2 = loadImage("assets/winter.jpg")
  i3 = loadImage("assets/spring.jpg")
}
  
  function draw() {
    background(220);
    
    timer++ ;
    if (timer >= 3*60){
      
      timer = 0;

    }
}