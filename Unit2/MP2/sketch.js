let state = -1;
let s1, s2, s3, s4;

function setup() {
  createCanvas(800, 800);
  s1= loadSound("assets/ABC.mp3");
  s2= loadSound("assets/Air.mp3");
  s3= loadSound("assets/Highway.mp3");
  s4= loadSound("assets/Mountain.mp3");
}

function draw() {
  background(220);
  fill("black");
  rect(200,200,400,600);
  fill("grey");
  ellipse(400,550,300)
  fill("black");
  ellipse(400,550,100);
  fill("blue")
  rect(300,250,200,76)
  switch (state) {
    case -1:
      text("please click to begin", 100, 100);
      break;

    case 0:
      text("0", 100, 100);
      if (!s1.isPlaying()) {
        s1.play() ;
      }
      break;

    case 1:
      text("1", 100, 100);
      if (!s2.isPlaying()) {
        s2.play() ;
      }
      break;

    case 2:
      text("2", 100, 100);
      if (!s3.isPlaying()) {
        s3.play() ;
      }
      break;
     case 3:
        text("3", 100, 100);
        if (!s4.isPlaying()) {
          s4.play() ;
        }

  
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 4) state = 0;
}
function touchStarted() {
  getAudioContext().resume();
}

}