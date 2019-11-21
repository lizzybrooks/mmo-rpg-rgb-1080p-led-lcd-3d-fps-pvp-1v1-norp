let char;
let groundTest
let headTest

function setup() {
  createCanvas(1600, 900);
  char = new bruh(800, 800, 0, 0, 0, 0, false, "white");
  ground = new platform(0, 830, 1600, 100)
  plat1 = new platform(400, 700, 150, 10)
}

function draw() {
  noStroke()
  background(10, 163, 240);
  fill(148, 240, 10)
  // rect(0, 830, 1600, 100);
  // rect (400, 700, 150, 10)
  rect (600, 570, 150, 10)
  fill(110, 86, 8)
  rect(400, 710, 150, 7)
  rect(600, 580, 150, 7)
  groundTest = get(char.x, char.y+32)
  headTest = get(char.x, char.y)
  char.drawBruh();
  char.moveBruh();
  char.land()
  fill(148, 240, 10)
  noStroke()
  ground.drawPlatform();
  plat1.drawPlatform();


}

class bruh {
	constructor(x,y,xMove, xMoveN, yMove, yMoveN, jumpable, color){
	   this.x = x;
     this.y = y;
     this.xMove = xMove
     this.xMoveN = xMoveN
     this.yMove = yMove
     this.yMoveN = yMoveN
     this.color= color;
     this.jumpable = jumpable
     this.hit = false;

	this.collide = function(obj){

		this.hit = collideRectRect(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.w, obj.h); //collide the cir object into this rectangle object.
}
		if(this.hit){
			this.jumpable = true
      print("hit")
		}
    else {
      this.jumpable = false
    }
  }

	drawBruh(){
    stroke(.5);
    fill(this.color);
		rect(this.x,this.y,30,30);
	}

	moveBruh(){
    this.x=this.x+this.xMove+this.xMoveN
    this.y=this.y+this.yMove+this.yMoveN
    this.yMoveN+=.4

    if (this.xMove < 0){
      this.xMove= 0
    }

    if (this.xMove > 0){
      this.xMove-=0.2
    }

    if (this.xMoveN > 0){
      this.xMoveN= 0
    }

    if (this.xMoveN < 0){
      this.xMoveN+=0.2
    }

    // if (groundTest[0] == 148 && groundTest[1] == 240 && groundTest[2] == 10){
    //   this.yMoveN=0
    //   this.y=this.y-0.4
    //}

    if (keyIsDown(RIGHT_ARROW)){
      this.xMove=this.xMove+3
    }

    if (this.xMove > 7){
      this.xMove=7
    }

    if (keyIsDown(LEFT_ARROW)){
      this.xMoveN=this.xMoveN-3
    }

    if (this.xMoveN < -7){
      this.xMoveN=-7
    }

    if (headTest[0] == 110 && headTest[1] == 86 && headTest[2] == 8){
      this.yMoveN= .3
    }

    if (keyIsDown(UP_ARROW) && this.jumpable == true){
      this.yMoveN=this.yMoveN-3
    }

    if (this.x >1570){
      this.x=1570
    }

    if (this.x<0){
      this.x=0
    }
	}
  land(){
    if(this.hit == true){
      this.yMoveN=0
      this.y=this.y-0.4
      print("landed")
      this.jumpable = true

    }

  }
}

class platform {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h
  }
  drawPlatform(){
    rect(this.x, this.y, this.w, this.h)
  }
}
