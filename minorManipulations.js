//baby pic used in class example is by ms. brooks. cite url for pics found online
//from 

var img;

//preload will load before setup runs
function preload() {
  //this relative file path starts in the same folder as your sketch.
  //In other words, in this example, make a folder called images in the same
  //folder as your sketch file (sketch.js) and then put the image file ("kittens.jpg")
  //inside of that.
  img = loadImage("images/jomy.jpg"); 
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0); //draw the image to the canvas
  console.log("Image width: " + img.width + " height: " + img.height);
  
  //one of the built-in filters to try out for inspiration! More at: https://p5js.org/reference/#/p5/filter
  //uncomment to test
  //filter(POSTERIZE, 5); 
  
  //change pixels, draw a blue stripe
  loadPixels();
  for(var i=4*640*100;i<4*640*200;i+=4) {
    pixels[i] = 0; //red
    pixels[i+1] = 0; //green
    pixels[i+2] = 255; //blue
    pixels[i+3] = 255; //alpha (transparency - works with PNGs, not JPGs)
  }
  updatePixels();
  
  //change tint of pixels in a stripe by modifying the red channel
  loadPixels();
  for(var i=4*640*300;i<4*640*400;i+=4) {
    pixels[i] = pixels[i]-50; //red
  }
  updatePixels();
  
}

function draw() {
  
}
