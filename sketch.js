
//making the npc - spawnPlastic - frameCount
// inside the { createSprite(diver.x + width/2)}
// start building gameStates -
//make the images transparent, getting a proper background - addtnl goal 
var diver,diverImage;
var fish1,fish2,fish1Img,fish2Img;
var bgImage;


function preload(){
  diverImage = loadImage("images/diver.png");
  fish1Img = loadImage("images/fish 1.png");
  fish2Img = loadImage("images/fish 2.png");
  bgImage = loadImage("images/bg.jpg");

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  
  
  diver = createSprite(width/2,height/2,30,30);
  diver.addImage(diverImage);
  diver.velocityX = 10;
  
  fish1 = createSprite(300,400,30,30);
  fish1.addImage(fish1Img);
  fish1.scale = 0.5;
  fish1.velocityX = 10;
  
  fish2 = createSprite(300,600,30,30);
  fish2.addImage(fish2Img);
  fish2.scale = 0.5;
  fish2.velocityX = 10;
  

}

function draw() {
  background("white"); 

  //set positions of the fish acc to diver .. fish.y = diver.y - 100

  if(keyDown(UP_ARROW)){
    diver.y = diver.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    diver.y = diver.y+10;
  }

  fish1.y = diver.y -100;
  fish2.y = diver.y +100;

  camera.x = diver.x;

  //image width - 5*width
  image(bgImage,0,0,5*width,height)

   
  
  
  drawSprites();

  
}