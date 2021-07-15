
  var runner_running,runner;
  var bombImage;
  var coinImage;
  var energyDrinkImage;
  var pathImage;
  var powerImage;
  var bomb,coin,energyDrink,path,power;

function preload(){
  //pre-load images
  createCanvas(400,400);
  pathImage=loadImage("path.png");
  bombImage=loadImage("bomb.png");
  coinImage=loadImage("coin.png");
  powerImage=loadImage("power.png");
  energyDrinkImage=loadImage("energyDrink.png");
  runner_running=loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  
  //create sprites here
      path = createSprite(200,200);
      path.addImage("path",pathImage);
      path.velocityY=4;
      path.scale=1.3;

      bomb = createSprite(100,100);
      bomb.addImage("bomb",bombImage);
      bomb.scale=0.1/3;
     

      coin = createSprite(200,150);
      coin.addImage("coin",coinImage);
      coin.scale=0.1;
     

      energyDrink = createSprite(160,250);
      energyDrink.addImage("energyDrink",energyDrinkImage);
      energyDrink.scale=0.1/2;
      

      power = createSprite(300,100);
      power.addImage("power",powerImage);
      power.scale=0.1;
      

      runner = createSprite(200,330,20,50);
      runner.addAnimation("runner",runner_running);
      runner.scale=0.1;

}


  

function draw() {
  background(0);
  drawSprites();
  
  if(path.y > 400 ){
      path.y = height/2;
  }
}







