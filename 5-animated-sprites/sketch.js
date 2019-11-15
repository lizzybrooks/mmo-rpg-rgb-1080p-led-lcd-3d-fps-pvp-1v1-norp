var xMove = 0;
var xMoveN = 0;
var yMove = 0;
var yMoveN = 0;
let char;
let groundTest
function setup() {
  createCanvas(1600, 900);
  char = new bruh(800, 800,"white");
}
function draw() {
noStroke()
background(10, 163, 240);
fill(148, 240, 10)
rect(0, 830, 1600, 100);
rect (400, 700, 150, 10)
fill(110, 86, 8)
rect (400, 710, 150, 7)
groundTest = get(char.x, char.y+31)
char.drawBruh();
char.moveBruh();

}



class bruh {
	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBruh(){  // draw a ball on the screen at x,y
    		stroke(.5);
    		fill(this.color);
		    rect(this.x,this.y,30,30);
	}
	moveBruh(){ //update the location of the ball, so it moves across the screen
    this.x=this.x+xMove+xMoveN
    this.y=this.y+yMove+yMoveN
    yMoveN+=.4

    if (xMove < 0){
      xMove= 0
      }
    if (xMove > 0){
      xMove-=0.2
    }
      if (xMoveN > 0){
      xMoveN= 0
      }
    if (xMoveN < 0){
      xMoveN+=0.2
    }

    if (groundTest[0] == 148 && groundTest[1] == 240 && groundTest[2] == 10){
      yMoveN=0
    }

    if (keyIsDown(RIGHT_ARROW)){
      xMove=xMove+3
    }
    if (xMove > 7){
      xMove=7
    }
    if (keyIsDown(LEFT_ARROW)){
      xMoveN=xMoveN-3
    }
    if (xMoveN < -7){
      xMoveN=-7
    }
    if (groundTest[0] == 110 && groundTest[1] == 86 && groundTest[2] == 8){
      yMoveN=0
    }
    if (keyIsDown(UP_ARROW) && groundTest[0] == 148 && groundTest[1] == 240 && groundTest[2] == 10){
      yMoveN=yMoveN-10
    }
	}
}
