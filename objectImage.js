//make room to load a photo and a filtered photo in this sketch
let photo1;
let filtered1;

function preload(){
    photo1 = loadImage('images/jomy0.jpg');
}

function setup() {
    //create canvas with the width of the loaded photo
  	createCanvas(photo1.width, photo1.height);
	filtered1 = new FilteredPhoto();  //create filtered image from the FilteredPhoto class
}


function draw(){
	filtered1.showPhoto(); //show the loaded photo (see class below)
    filtered1.blueTint(); //tint it
    filtered1.moveTint(); // move the tint based on the mouse position-- all this stuff is defined in the FilteredPhoto class
}


//make a class or template called FilteredPhoto, from which many similar altered photos can be made.
class FilteredPhoto {
    // make a constructor to hold starting data for your processes -- anything that you'll update should go as a parameter in here
	constructor(bluebegin, blueend){
        this.bluebegin = photo1.height/2;
        this.blueend = photo1.height/2 + 100;
	}
//show the photo at 0,0
	showPhoto(){
		image(photo1, 0, 0);
	}

    blueTint(){
        //change tint of pixels in a stripe by modifying the red channel
        loadPixels();
        for(let i=4 * photo1.width * this.bluebegin; i<4 * photo1.width * this.blueend ; i+=4) {
          pixels[i] = pixels[i]-50; //red
        }
        updatePixels();
    }
//move the placement of the tint filter based on mouse position
    moveTint(){
        if(mouseY <= photo1.height/2){
           this.bluebegin = mouseY;
     }
     else{
         this.blueend = mouseY;
     }

    }

}
