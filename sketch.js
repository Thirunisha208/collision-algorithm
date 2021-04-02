var mbox;
var fbox;
function setup() {

  createCanvas(800,400);
 mbox=createSprite(400,200,50,80);
 fbox=createSprite(400,150,60,100);
}

function draw() {
  background(255,255,255);  
mbox.x=mouseX;
mbox.y=mouseY;


if(mbox.x-fbox.x<mbox.width/2 + fbox.width/2 &&
  fbox.x-mbox.x<mbox.width/2 + fbox.width/2 &&
  mbox.y-fbox.y<mbox.height/2+fbox.height/2 &&
  fbox.y-mbox.y<mbox.height/2+fbox.height/2){
  mbox.shapeColor="red";
  fbox.shapeColor="red";
}else
{
  mbox.shapeColor="green";
  fbox.shapeColor="green";
}

  drawSprites();
}