var bubbles = [];
let url = "";
let img;

function setup() {
  let key = "1kbaRvEXZiODz4F2EVhZgTwjvQQaeZnXD8mJporjbv7w"; // this is KEY of the URL from the sheet
  
  //  let key = "1g6o2AfpufqOBwo1bthRzXYd_S85WxsjYqWIU4t16rzg"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  img = loadImage('assets/Vac.jpg');
  song = loadSound('assets/Serenity.mp3');
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your favorite cuisine to eat when traveling?"],
        data[i]["What is your favorite environment to travel to?"],
        data[i]["What is your favorite hobby to do when traveling"],
        data[i]["Where do you prefer to stay when you travel"])); 
    
  }
}
function preload() {
  image(img, 0, 0);
};
function draw() {
  background(img, 600, 400);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
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
// my Bubble class
class Bubble {
  constructor(cuisine, hobby, environment, stay) {
    // only the order of these parameters matters!
    this.cuisine = cuisine;
    this.hobby = hobby;
    this.environment = environment;
    this.stay = stay;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("purple");
    ellipse(this.pos.x, this.pos.y+10, 190, 190);
    fill("white");
    text(
      this.cuisine + "\n" + this.hobby + "\n" + this.environment + "\n" + this.stay,
      this.pos.x,
      this.pos.y +10,
      
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = -3 ; 
    if (this.pos.y > height) this.pos.y = -2 ;
  }
  
  
}
