


function preload(){
  seaImg = loadImage('sea.png');
  shipImg = loadAnimation( 'ship-1.png', 'ship-2.png');
} 


function setup(){
  createCanvas(400,400);
  
  sea = createSprite(170,200,50,50);
  sea.scale=0.3;
  sea.addImage("sea",seaImg);

   ship = createSprite(171,201,50,50);
   ship.scale=0.3;
   ship.addAnimation("ship",shipImg);

}

function draw() {
  background("lightblue");
  sea.velocityX = 6;
 
  if(sea.x > 500 ){
   sea.x = height/2;
 }
 
 drawSprites();
 

}