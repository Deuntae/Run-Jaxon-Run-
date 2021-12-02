var 
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var sprite = createSprite(100,200,50,50);
path = createSprite(200,200);
path.addImage(path.png);
}

function draw() {
  background(0);
drawSprites();
}
