// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature=0;
let humidity=0;
let img;

function preload() {
  fontRegular = loadFont('assets/Rubik.ttf');
  img = loadImage('assets/Leb.jpg');
}
function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Lebanon,TN,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=88d75b4b549f3a835ea745f8097e773f" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
  textFont(fontRegular);
  text('Font Style Normal', 10, 30);
  image(img, 0, 0);
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
let temperature = weather.main.temp;
  humidity= weather.main.humidity;

}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temperature, 20, 60);
      text("humidity is " + humidity +"%", 20, 80);
 

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}