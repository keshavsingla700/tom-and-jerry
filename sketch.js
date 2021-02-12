var garden,gardenimg;
var cat,cat1img,cat2img,cat3img;
var mouse,mouse1img;

function preload() {
    //load the images here
    gardenimg = loadImage("garden.png");
    cat1img = loadAnimation("cat1.png");
    cat2img = loadAnimation("cat2.png","cat3png");
    mouse1img = loadAnimation("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenimg);
    
    cat = createSprite(800,630);
    cat.addAnimation("cat",cat1img);
    cat.addAnimation("run",cat2img);
    cat.scale=0.15;

    mouse = createSprite(100,630);
    mouse.addAnimation("mouse",mouse1img);
    mouse.scale=0.1;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX=-5;
     //   cat.addAnimation("run",cat2img);
        cat.changeAnimation("run",cat2img);
    }

  //For moving and changing animation write code here


}
