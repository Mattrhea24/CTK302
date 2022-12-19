function setup() {
  createCanvas(500, 500);
  song = loadSound('assets/Bop.mp3');
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
};
