var cat,catImg,catImg2;
var mouse,mouseImg,mouseImg2;
var bgImg;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg=loadAnimation("images/cat1.png");
    mouseImg=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png,images/cat3.png,images/cat4.png");
    mouseImg2=loadAnimation("images/mouse2.png,images/mouse.png,images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(300,100,50,50);
   mouse=createSprite(100,100,30,30);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.addAnimation("catHappy",catImg);
       cat.changeAnimation("catHappy");
       mouse.addAnimation("mouseHappy",mouseImg);
       mouse.changeAnimation("mousehappy");
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;
  }
  if(keyCode === LEFT_ARROW){
      cat.addAnimation("catTeased",catImg2);
      cat.changeAnimation("catTeased");
      cat.frameDelay=25;
  }
}
