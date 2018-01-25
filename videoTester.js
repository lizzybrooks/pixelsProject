//Modified from P5 example at: https://p5js.org/examples/dom-video-capture.html by nataliefreed

var capture;

function setup() {
  createCanvas(320, 240);
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  
  image(capture, 0, 0, 320, 240);
  
  loadPixels();
  for(var i=0;i<pixels.length;i+=4) {
    if(pixels[i] > 200) { //if amount of red in a pixel is high enough, add yellow highlights
      pixels[i] = 255; //red
      pixels[i+1] = 255; //green
      pixels[i+2] = 0; //blue
    };
  }
  updatePixels();
}
