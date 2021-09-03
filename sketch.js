var bgImg, bg , girlImg, boyImg;
var BEGNIN, BOY, GIRL, END;
var gameState = BEGNIN;
var player, ground;
var boy, girl;


function preload()
{
  bgImg = loadImage("backgroundcorona.jpg");
  boyImg = loadImage("coronaBoy.png");
  girlImg = loadImage("coronaGirl.png");
}

function setup() 
{
  createCanvas(800,400);

  player = createSprite(100, 300);
  
  ground = createSprite(400, 380, 800, 20);

  bg = createSprite(400, 200);
  bg.addImage("j", bgImg);
  bg.scale = 2;
}


function draw() 
{
  background(bgImg);
  
  if(gameState === BEGNIN)
  {
  
    boy = createSprite(200, 200);
    boy.addImage("k", boyImg);
    boy.scale = 0.5;

    girl = createSprite(600, 200);
    girl.addImage("j", girlImg);
    girl.scale = 0.5;
    
    fill("black");
    textSize(30);
    text("Let us start! Please choose a character to continue", 100, 100);
    
    if(keyWentDown("left_arrow"))
    {
      gameState = BOY;
    }

    if(keyWentDown("right_arrow"))
    {
      gameState = GIRL;
    }
  }

  if(gameState === BOY)
  {
    player.addImage("k", boyImg);
  }

  if(gameState === GIRL)
  {
    player.addImage("j", girlImg);
  }



  drawSprites();
}