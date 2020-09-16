var bullet,wall, thickness;
var speed, weight;
var damage;



function setup() {
  createCanvas(1600,400);
  weight = random(30,52);
  speed = random(223,321);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50,200,10,2);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);
} 

function draw(){
  background(0,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 *weight * speed * speed/(thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = "green";
    }

    if(damage < 10){
      wall.shapeColor = "red";
    }

  }

  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
