var xMove = 0;
var xMoveN = 0;
var yMove = 0;
var yMoveN = 0;
let char;
let groundTest
let headTest
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
rect(400, 710, 150, 7)
groundTest = get(char.x, char.y+31)
headTest = get(char.x, char.y)
char.drawBruh();
char.moveBruh();

}



class bruh {
	constructor(x,y,color){
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBruh(){
    		stroke(.5);
    		fill(this.color);
		    rect(this.x,this.y,30,30);
	}
	moveBruh(){
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
      this.y=this.y-0.4
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
    if (headTest[0] == 110 && headTest[1] == 86 && headTest[2] == 8){
      yMoveN= .3
    }
    if (keyIsDown(UP_ARROW) && groundTest[0] == 148 && groundTest[1] == 240 && groundTest[2] == 10){
      yMoveN=yMoveN-10
    }
    if (this.x >1570){
      this.x=1570
    }
    if (this.x<0)
    this.x=0
	}
}
