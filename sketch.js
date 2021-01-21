var tom, jerry, garden;
var tomSittingImage, tomWalkingImage2, tomWalkingImage1, tomStandingImage, gardenImage;
var  jerryHappyImage,  jerryStandingImage1,  jerryStandingImage2,  jerrySeeingImage; 
function preload() {
    //load the images here
   tomSittingImage = loadImage("images/cat1.png");
   tomWalkingImage1 = loadImage("images/cat2.png");
   tomWalkingImage2 = loadImage("images/cat3.png");
   tomStandingImage = loadImage("images/cat4.png");

   jerryHappyImage = loadImage("images/mouse1.png");
   jerryStandingImage1 = loadImage("images/mouse2.png");
   jerryStandingImage2 = loadImage("images/mouse3.png");
   jerrySeeingImage = loadImage("images/mouse4.png");
   
   gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(750,600);
    tom.addImage(tomSittingImage);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addImage(jerryHappyImage);
    jerry.scale = 0.2;
}

function draw() {
   background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    tom.velocityX = 0;
   if(keyWentDown(LEFT_ARROW)){
    tom.velocityX = tom.velocityX-10
    tom.addImage(tomWalkingImage1);
    jerry.addImage(jerryStandingImage1);
    }
    if(keyWentUp(LEFT_ARROW)){
    tom.addImage(tomWalkingImage2);
    jerry.addImage(jerryStandingImage2);
    tom.velocityX = tom.velocityX-10
    }
    tom.setCollider("circle",0,0,500);
    tom.debug = false;

    jerry.setCollider("circle",0,0,200);
    jerry.debug = false;

    if(tom.isTouching(jerry)){
    tom.addImage(tomStandingImage);
    jerry.addImage(jerrySeeingImage);
    tom.velocityX = 0;
    }
    drawSprites();
}


