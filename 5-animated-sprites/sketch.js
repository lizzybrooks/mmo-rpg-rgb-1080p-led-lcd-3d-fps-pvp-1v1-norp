var jellyX = 400;
var jellyY = 400;
let jellyimg;
var xMove = 0;
var xMoveN = 0;
var yMove = 0;
var yMoveN = 0;

function setup() {
  createCanvas(800, 800);


};
function draw() {
background(220);
  jelly()
  jellyX=jellyX+xMove+xMoveN
  jellyY=jellyY+yMove+yMoveN
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
  if (yMove < 0){
    yMove= 0
    }
  if (yMove > 0){
    yMove-=0.2
  }
  if (yMoveN > 0){
    yMoveN= 0
    }
  if (yMoveN < 0){
    yMoveN+=0.2
  }
};

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    xMove=xMove+6
  }
  if (keyCode === LEFT_ARROW){
    xMoveN=xMoveN-6
  }
    if (keyCode === DOWN_ARROW){
    yMove=yMove+6
  }
  if (keyCode === UP_ARROW){
    yMoveN=yMoveN-6
  }
};

function jelly(){
  rect(jellyX, jellyY, 30, 30)
};
