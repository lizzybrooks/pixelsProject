# pixelsProject

![pixel banner](https://github.com/lizzybrooks/pixelsProject/blob/master/pixelspics/pixelbanner.png)

Create your own digital image filter by writing a program to manipulate the pixels of an image. Your filter should be generalized enough to work on arbitrary images, not just the training set. In other words, you should be able to hand off your program to someone else to try on their own photos.

### Assignment Rubric
The project is worth 30 points. Write clear code with comments, cite sources, play and experiment. We'll cover all the technical requirements in class. Grading is lenient to encourage creativity and risk-taking over rote assignment completion. 
The full rubric is online at this [link](https://docs.google.com/spreadsheets/d/1gjmgkMsPOTX1_vrfAiLvYJhuuomyxJPCz-fxnbw2QoQ/edit?usp=sharing).

### Possible Ideas:
* A filter applied to a static image, such as the filters used by Instagram, Adobe Photoshop, and other apps.
* A filter applied to a moving image (video), such as the filters used by Snapchat and other apps.
* A filter that stores and retrieves secret data in an image. [Steganography](http://en.wikipedia.org/wiki/Steganography) is the art of hiding a message within another message, such as by concealing a image or text inside an image.
* Or? Something completely different... 


### Starting Point Activity:
1) Play with the [p5.js image manipulation library](https://p5js.org/reference/#group-Image). Start by loading and displaying an image. Then use the methods in the pixels example to play around with image manipulation. You will need an image to play with, and you'll need to be running a local server. [Here are simple instructions](https://lwhs.myschoolapp.com/app/faculty#topicdetail/305975/32277002/32277002/653432/0/0) for installing a local server with node.js.

2) Try [this still image starting point](https://github.com/lizzybrooks/pixelsProject/blob/master/minorManipulations.js). Make some changes, such as experimenting with the filters and then making a change of your own to some pixels.

3) Try [this live image from webcam example](https://github.com/lizzybrooks/pixelsProject/blob/master/videoTester.js). Make some changes, such as searching for other features other than amount of red in the image.

4) Play with [these experiments in computer vision](https://github.com/kylemcdonald/cv-examples). This is a very useful library by Kyle McDonald that contains many, many face tracking examples!

5) And with [this face-tracking example](https://github.com/auduno/clmtrackr). 

6) Write down six ideas for possible filters that you'd like to make. Jot them on a piece of paper. When you have six, add them to the [brainstorm doc](https://github.com/lizzybrooks/pixelsProject/blob/master/brainstorm.md). 


### Stage 1: Prototyping
1) Choose a prompt from the list of brainstorms (yours or someone else's) and "solve" it in the simplest way possible. Use a single image (or video) for testing. Make the desired effect happen. Try it in a couple of ways. 

### Stage 2: Program Implementation
1) Learn about object-oriented program design (we'll discuss in class, also, see below).
    * Video for p5/JavaScript programmers [here](https://www.youtube.com/watch?v=T-HGdc8L-7w&t=586s)
    * Tutorial for Python programmers [here](https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/)
    * [Documentation](https://processing.org/reference/class.html) of classes in Processing (Java), [Tutorial](https://processing.org/tutorials/objects/) on objects in Processing, [Tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html) on classes in Java. 
2) Rewrite your filter using object structure, e.g. design a class and instantiate an object with a constructor. 
3) Consider: what's the point of object-oriented programming? 

### Stage 3: Test and Debug
1) Add more images to your test set.
2) Debug your program so it works with a wide range of images.
3) Discuss boundary cases and how to identify them.
4) Test for boundary cases and document the boundaries of your application.

### Stage 4: Add Functionality, Enhance
1) Add some new features to your program! How could it be even more interesting? 

### Stage 5: Usability
1) Add an interface so users can explore the features of your application.
2) Maybe you want sliders to control the amount of filtration. 
3) Maybe you want to allow users to add their own images via URL or drag/drop interface.
4) Maybe you want a button that says "view filtered/original".
5) etc. 

### Stage 6: Publishing
1) Host your application via Github pages OR package your application so that it can be downloaded and installed. 
2) Link to your web app or download page via the final projects page in this repository (coming soon). 






