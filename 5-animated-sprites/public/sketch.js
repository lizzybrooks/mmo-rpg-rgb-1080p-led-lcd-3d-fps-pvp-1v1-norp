var socket;

function setup() {
  createCanvas(500, 400);
  background(25,40,150);

  socket = io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing)
}


function draw(){
}

function mouseDragged(){
    fill(0,200,50,100);
    noStroke();
    ellipse(mouseX,mouseY,30);

    console.log('sending '+ mouseX + ' , ' + mouseY);

    var data = {
        x:mouseX,
        y:mouseY
    }
    socket.emit('mouse',data);
}

function newDrawing(data){
    fill(200,0,50,100);
    noStroke();
    ellipse(data.x,data.y,30);

}
