let state=0;
let timer = 0;
function setup(){
  createCanvas(500,500);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
switch (state) {
  case 0:
    background("red");
    text("Parallel lines have so much in common.", width / 2, height /2);
    break;

    case 1:
      background("blue");
      text("It's a shame they'll never meet", width / 2, height /2);
}

timer++ ;
if(timer >4 * 60){
  timer = 0;
  state++;
  if(state >1){
    state = 0;
  }
}
}
