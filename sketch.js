var boy, girl, male, female;
var boyImg, girlImg, maleImg, femaleImg, balloonImg, backgroundImg;
var box;

function preload() {
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
  maleImg = loadImage("male.png");
  femaleImg = loadImage("female.png");
  balloonImg = loadImage("balloon.png");
  backgroundImg = loadImage("background.jpg");
}

function setup() {
  createCanvas(1000, 800);
  boy = createSprite(150, 700, 20, 20);
  boy.addImage(boyImg);
  boy.scale = 0.3;

  girl = createSprite(230, 700, 20, 20);
  girl.addImage(girlImg);
  girl.scale = 0.3;

  female = createSprite(330, 680, 20, 20,);
  female.addImage(femaleImg);
  female.scale = 0.4;

  male = createSprite(440, 680, 20, 20);
  male.addImage(maleImg);
  male.scale = 0.4;

  balloon = createSprite(700, 400);
  balloon.addImage(balloonImg);
  balloon.scale = 0.95;

  box = createInput("Hi! My name is Michael!" );
  box.position(400, 520);
  

}

function draw() {
  background(backgroundImg);
  drawSprites();
}