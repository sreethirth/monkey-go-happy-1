
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocitY=-4;
  ground.x=ground.width/2
  console.log(ground.x)
  
  foodGroup=new Group();

  
}


function draw() {
  background("white")
stroke("white");
  textSize(20);
  fill("white")
  text("score: "+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,200,50);
  
  if(keyDown("space") && monkey.y >=159){
    monkey.velocityY=-12;
  }
 monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  spawnfood();
    spawnObstacles();
drawSprites();
   
}

function spawnfood(){

if (frameCount % 80===0)  {
  var banana=createSprite(400,200,20,20)
  banana.y=Math.round(random(120,200))
  banana.addImage(bananaImage)
  banana.velocityX=-5; 
  banana.scale=0.1
}
}

function spawnObstacles(){
   if(frameCount % 300 === 0) {
    var obstacle = createSprite(200,330,10,100);
     obstacle.addImage(stoneImage)
     obstacle.scale = 0.1;
    //obstacle.debug = true;
    obstacle.velocityX =-6;
     
      //assign scale and lifetime to the obstacle           
    obstacle.lifetime = 300;
    //add each obstacle to the group
     
   }
}