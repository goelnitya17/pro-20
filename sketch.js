var mouse;
var cat;
var background,backgroundImg;

function preload(){

    mouseimg1=loadAnimation("images/mouse1.png");
    catimg=loadAnimation("images/catimg1.png");
    mouseimg2=loadAnimation("mouseimg2.png","mouseimg3.png");
    catimg2=loadAnimation("catimg2.png","catimg3.png");
    backgroundImg=loadImage("garden");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(500,600,50,80);
mouse=createSprite(590,650,80,5);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2)

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}

}
