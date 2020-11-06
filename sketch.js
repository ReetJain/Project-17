
var monkey , monkey_running
var banana ,bananaImage, stone, stoneImage
var FoodGroup, stoneGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  monkey = createSprite(50,390);
  monkey.addAnimation("monkeyImage",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,390,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  stoneGroup = new Group();
  
  bananaGroup = new Group();
  
  score = 0;
  
  gameState = "run";
  
}


function draw() {
 
  background("dodgerblue");
  
  if(gameState === "run"){
    
    if(keyDown("space")&& monkey.y >= 250){
    
    monkey.velocityY = -12;
    
  }
    
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  createStone();
  
  createBanana();
    
  if(monkey.isTouching(stoneGroup)){
    
    gameState = "out"
    
  }  

    
  }
  
  else if(gameState === "out"){
    
    ground.velocity = 0;
    
  }
  
  if(ground.x < 0){
    
    ground.x = ground.width/2;
  }
  
 
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  score = Math.ceil(frameCount/frameRate());
  text("Score: "+score,300,50)
  
}

function createStone(){
  
  if(frameCount % 300 === 0){
    
    stone = createSprite(400,367);
    stone.addImage(stoneImage);
    stone.scale = 0.1;
    stone.velocityX = -6;
    stone.lifetime = 65;
    stoneGroup.add(stone);
    
  }
}

function createBanana(){
  
  if(frameCount % 80 === 0){
    
    banana = createSprite(400,120)
    banana.addImage(bananaImage);
    banana.velocityX = -6;
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    banana.lifetime = 65;
    bananaGroup.add(banana);
    
  }
  
}






